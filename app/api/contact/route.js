import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.VITE_Gmail,
    pass: process.env.VITE_GPWD,
  },
});

// Function to send notification email
async function sendNotificationEmail() {
  const mailOptions = {
    from: process.env.VITE_Gmail, // Replace with your Gmail email
    to: process.env.VITE_Rceiv,   // Replace with recipient email
    subject: 'Notification: Someone visited your portfolio',
    text: 'Greetings, someone has visited your portfolio.',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Failed to send notification email:', error);
    throw error; // Throw the error to handle it further if needed
  }
}

export async function POST(req, res) {
  // if (req.method === 'GET') {
  //   try {
  //     // Send notification email on GET request
  //     await sendNotificationEmail();
  //     console.log(`email sent successfully`)
  //   } catch (error) {
  //     console.error('Failed to send notification email:', error);
  //   }
  // } 
  //else
  if (req.method !== 'POST') {
    return new Response({ error: 'Method Not Allowed' }, { status: 405, headers: { 'Content-Type': 'application/json' } });

  }

  const { name, email, message } = await req.json();

  // Validate request data (if needed)
  if (!name || !email || !message) {
    return new Response({ error: 'Please provide name, email, and message' },{ status: 400, headers: { 'Content-Type': 'application/json' } } );
  }

  // Configure email options
  const mailOptions = {
    from: email,
    to: process.env.VITE_Rceiv,
    subject: `Form submission from ${name} | email id - ${email}`,
    text: message,
  };

  try {
    // Send email using transporter
    await transporter.sendMail(mailOptions);

    // Respond with success message
    return new Response({ message: 'Message sent successfully' }, { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Failed to send message:', error);
    return new Response({ error: 'Failed to send message' }, { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
