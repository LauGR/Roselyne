const dotEnv = require('dotenv').load();
const nodemailer = require("nodemailer");
module.exports = (app, passport) => {


    // CONTACT FORM

    app.get('/contact', (req, res) => {
        res.render('contact', {
            layout: 'layoutContact'
        });
    })

    app.get('/validationemail', (req, res) => {
        res.render('validationEmail', {
            layout: 'layoutContact'
        });
    })
    app.get('/nonvalidationemail', (req, res) => {
        res.render('nonvalidationEmail', {
            layout: 'layoutContact'
        });
    })

    app.post('/email', (req, res) => {
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });
        let mail = {
            from: req.body.email,
            to: process.env.EMAIL,
            subject: req.body.subject,
            html: req.body.name.toUpperCase() + req.body.email + req.body.message
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