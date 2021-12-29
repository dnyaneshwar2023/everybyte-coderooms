const transporter = require("./transport");
const message = require("./template");
const sendInvitation = (roomid, roomname, recipient, user) => {
  let mailOptions = {
    from: "Everybyte Coderooms <no-reply@gmail.com>",
    to: recipient,
    subject: `Invitiation to Code Room by ${user}`,
    html: message(roomid, roomname, user),
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

module.exports = sendInvitation;
