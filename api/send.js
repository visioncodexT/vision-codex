import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. Handle non-POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, company, subject, message } = req.body;

    // 2. Check for API key
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_xxxxxxxxx') {
      return res.status(500).json({ error: 'Resend API key is missing. Please add it to Vercel Environment Variables.' });
    }

    // 3. Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide Name, Email, and Message.' });
    }

    // 4. Send Email
    // Using ONLY ONE recipient to stay within Resend Free/Onboarding limits
    const { data, error } = await resend.emails.send({
      from: 'VisionTechX <onboarding@resend.dev>',
      to: 'info.visiontechx@gmail.com', 
      subject: `New Inquiry: ${subject || 'General'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #f97316;">New Project Inquiry</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Service:</strong> ${service || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error: error.message || 'Resend failed to send email' });
    }

    return res.status(200).json({ success: true, data });

  } catch (err) {
    console.error('Serverless Function Error:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
