function getRawBody(req: any) {
  return new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString()));
    req.on('error', reject);
  });
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    const raw = await getRawBody(req);
    const params = new URLSearchParams(raw);

    const key = process.env.WEB3FORMS_KEY;
    if (!key) {
      res.status(500).json({ success: false, message: 'Server missing WEB3FORMS_KEY' });
      return;
    }

    params.set('access_key', key);

    const name = (params.get('name') || '').trim();
    const message = (params.get('message') || '').trim();
    const consent = params.get('consent');

    if (!name) {
      res.status(400).json({ success: false, message: 'Name is required' });
      return;
    }

    if (!message || message.length < 50) {
      res.status(400).json({ success: false, message: 'Message must be at least 50 characters' });
      return;
    }

    if (!consent) {
      res.status(400).json({ success: false, message: 'Consent is required' });
      return;
    }

    const forward = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      },
      body: params.toString(),
    });

    const contentType = forward.headers.get('content-type') || '';
    const text = await forward.text();

    // If remote returned HTML (Cloudflare challenge), don't forward raw HTML to browser.
    if (contentType.includes('text/html') || text.trim().startsWith('<!DOCTYPE')) {
      console.error('Web3Forms returned HTML challenge or unexpected HTML response');
      res.status(502).json({ success: false, message: 'Remote service blocked the request (Cloudflare). Попробуйте позже.' });
      return;
    }

    // Proxy JSON/text responses
    res.status(forward.status).setHeader('Content-Type', contentType || 'application/json').send(text);
  } catch (err) {
    console.error('web3forms proxy error:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
