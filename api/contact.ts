import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, method, contact, message } = req.body || {};
  if (!contact || !message) {
    res.status(400).json({ error: 'Missing contact or message' });
    return;
  }

  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const FROM_EMAIL = process.env.FROM_EMAIL || process.env.SMTP_USER;
  const TO_EMAIL = process.env.NOTIFY_EMAIL || 'sibyakovaV2007@yandex.ru';

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL) {
    res.status(500).json({ error: 'SMTP configuration missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL' });
    return;
  }

  const portNum = parseInt(SMTP_PORT, 10) || 587;
  const secure = portNum === 465;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: portNum,
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subj = `Новый запрос с сайта — ${method || 'contact'}`;
  const text = `Имя: ${name || '-'}\nСпособ: ${method || '-'}\nКонтакт: ${contact}\n\nСообщение:\n${message}`;

  try {
    await transporter.sendMail({ from: FROM_EMAIL, to: TO_EMAIL, subject: subj, text });
    res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('sendMail error', err);
    res.status(500).json({ error: err?.message || 'Failed to send' });
  }
}
