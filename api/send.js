import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, company, subject, message } = req.body;

  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_xxxxxxxxx') {
    return res.status(500).json({ error: 'Resend API key is not configured in environment variables.' });
  }

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields (name, email, message)' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'VisionTechX <onboarding@resend.dev>',
      to: ['info.visiontechx@gmail.com', 'info@visiontechx.com'], // Sending to both as per user request
      subject: `New Inquiry: ${subject || 'Contact Form'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #f97316;">New Project Inquiry</h2>
          <p>You have received a new message from your portfolio contact form.</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service:</td>
              <td style="padding: 8px 0;">${service || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${company || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0;">${subject || 'N/A'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold;">Message:</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
          </div>
          
          <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
            Sent via VisionTechX Portfolio Contact Form
          </p>
        </div>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
