const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "gundurragad@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "gundurragad@gmail.com",
    subject:
      "We hope you enjoyed your ride in Paintingstack. All your data will be erased in the next minutes. Good Luck!",
    html: `<div><h1>h1</h1><h2>h2</h2></div> Goodbye ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
