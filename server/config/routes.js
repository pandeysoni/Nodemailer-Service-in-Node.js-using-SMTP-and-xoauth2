const nodemailer = require('nodemailer')
const config = require('./config')

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: config.mailUser,
        pass: config.mailPass
    }
});

module.exports = function (app) {
    // send mail with defined transport object
    app.post('/send', function(req, res){  
        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: ''+config.mailUser+'', // sender address
            to: req.body.receivers, // list of receivers
            subject: req.body.subject, // Subject line
            text: req.body.text, // plaintext body
            // html: '<b>Hello world 🐴</b>' // html body
        }; 
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return res.send(error);
            }
            return res.send("mail send successfully");
        }); 
    })
};