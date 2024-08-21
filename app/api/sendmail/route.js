import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.VITE_Gmail, // Make sure these env variables are set
    pass: process.env.VITE_GPWD,
  },
});
export async function POST(req, res) {
  if (req.method === 'POST') {
    const { logDetails } = await req.json();

    const mailOptions = {
      from: process.env.VITE_Gmail,
      to: process.env.VITE_Rceiv, // Use environment variable for recipient email
      subject: 'Notification: Someone Accessed Your Site..!!',
      text: `Greetings,

Greetings Mam, A person has accessed your Portfolio. Here are the details:

${logDetails}

For further information, contact me by replying to this email.

Thank you.

Regards,
Amudha. V
`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return new Response({ message: 'Message sent successfully' }, { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
      console.error('Failed to send notification email:', error);
      return new Response({ message: 'Failed to send' }, { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  } else {
    return new Response({ error: 'Method Not Allowed' }, { status: 405, headers: { 'Content-Type': 'application/json' } });
  }
}