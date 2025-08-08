// /api/contact.js
import { Resend } from 'resend';

function renderTemplate(data) {
  const phoneRow = data.phone ? `<div class="row"><div class="label">Teléfono</div><div class="value">${data.phone}</div></div>` : '';
  return `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Nuevo mensaje - Cognytia</title>
  <style>
    body{font-family:Arial,Helvetica,sans-serif;background:#f6f8fa;margin:0;padding:24px;color:#0f172a}
    .card{max-width:640px;margin:auto;background:#fff;border-radius:12px;border:1px solid #e5e7eb}
    .header{padding:20px 24px;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;gap:12px}
    .badge{background:#47ABB1;color:#fff;font-weight:600;border-radius:999px;padding:6px 10px;font-size:12px}
    .content{padding:24px}
    .row{margin:0 0 12px 0}
    .label{font-size:12px;color:#64748b;margin-bottom:4px}
    .value{font-size:16px;color:#0f172a}
    .footer{padding:16px 24px;border-top:1px solid #e5e7eb;font-size:12px;color:#64748b}
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <span class="badge">Contacto web</span>
      <strong>Cognytia Solutions</strong>
    </div>
    <div class="content">
      <div class="row">
        <div class="label">Nombre</div>
        <div class="value">{{name}}</div>
      </div>
      <div class="row">
        <div class="label">Correo</div>
        <div class="value">{{email}}</div>
      </div>
      {{phone_row}}
      <div class="row">
        <div class="label">Mensaje</div>
        <div class="value">{{message}}</div>
      </div>
    </div>
    <div class="footer">
      Este correo fue generado automáticamente desde el formulario de <strong>cognytia.mx</strong>
    </div>
  </div>
</body>
</html>
`
    .replace('{{name}}', data.name || '')
    .replace('{{email}}', data.email || '')
    .replace('{{message}}', (data.message || '').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br/>'))
    .replace('{{phone_row}}', phoneRow);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  try {
    const { name, email, message, phone } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Faltan campos' });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const html = renderTemplate({ name, email, message, phone });
    await resend.emails.send({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: `Nuevo mensaje de contacto - Cognytia`,
      reply_to: email,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'Error al enviar' });
  }
}
