import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.EMAIL, // Your email where you'll receive emails
      from: process.env.EMAIL, // your website email address here
      subject: `Feedback`,
      html: `<div>You've got a feedback from ${req.body.name} with email: ${req.body.email}<br /> message: ${req.body.msg}</div>`,
    });
  } catch (error) {
    return res.status(500).json({ message: "Request Failed" });
  }

  return res.status(200).json();
}

export default sendEmail;
