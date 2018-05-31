const dotEnv = require('dotenv').load();
const nodemailer = require("nodemailer");

module.exports = (app, passport) => {


    // CONTACT FORM
    app.get('/contact', (req, res) => {
        res.render('contact', {
            layout: 'layout'
        });
    })

    app.get('/validationemail', (req, res) => {
        res.render('validationEmail', {
            layout: 'layout'
        });
    })
    app.get('/nonvalidationemail', (req, res) => {
        res.render('nonvalidationEmail', {
            layout: 'layout'
        });
    })

    app.post('/email', (req, res) => {
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                user: 'zanfanbondie974@gmail.com',
                pass: 'lokervayan974'
            }
        });
        let mail = {
            from: req.body.email,
            to: 'zanfanbondie974@gmail.com',
            subject: req.body.subject,
            html: " nom : " + req.body.name + " email : " + req.body.email + "subject :" + req.body.subject + " message : " + req.body.message
        }

        transporter.sendMail(mail, (error, response) => {
            if (error) {
                console.log("Mail non envoyé");
                res.redirect('/nonvalidationemail')
            } else {
                console.log("Mail envoyé ")
                res.redirect('/validationemail')
            }
            transporter.close();
        });
    })

}