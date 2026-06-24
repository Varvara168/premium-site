export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    // Read raw body
    const chunks: Uint8Array[] = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString();

    const params = new URLSearchParams(raw);

    const key = process.env.WEB3FORMS_KEY;
    if (!key) {
      return res.status(500).json({ success: false, message: 'Server missing WEB3FORMS_KEY' });
    }

    params.set('access_key', key);

    // Basic server-side validation
    const name = (params.get('name') || '').trim();
    const message = (params.get('message') || '').trim();
    const consent = params.get('consent');

    if (!name) return res.status(400).json({ success: false, message: 'Name is required' });
    if (!message || message.length < 50) return res.status(400).json({ success: false, message: 'Message must be at least 50 characters' });
    if (!consent) return res.status(400).json({ success: false, message: 'Consent is required' });

    // Forward to Web3Forms
    const forward = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const text = await forward.text();
    // Proxy status and body
    res.status(forward.status).setHeader('Content-Type', 'application/json').send(text);
  } catch (err) {
    console.error('web3forms proxy error:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
