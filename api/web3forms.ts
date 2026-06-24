export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const formData = await req.formData();
  const params = new URLSearchParams();

  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') {
      params.append(key, value);
    }
  }

  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    return new Response(JSON.stringify({ success: false, message: 'Server missing WEB3FORMS_KEY' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  params.set('access_key', key);

  const name = (params.get('name') || '').trim();
  const message = (params.get('message') || '').trim();
  const consent = params.get('consent');

  if (!name) {
    return new Response(JSON.stringify({ success: false, message: 'Name is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!message || message.length < 50) {
    return new Response(JSON.stringify({ success: false, message: 'Message must be at least 50 characters' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!consent) {
    return new Response(JSON.stringify({ success: false, message: 'Consent is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
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

  const text = await forward.text();
  return new Response(text, {
    status: forward.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
