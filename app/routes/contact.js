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
            host: 'mail.roselyne.re',
            secure: true,
            port: 465,
            auth: {
                user: '_mainaccount@roselyne.re',
                pass: '3ufjSHPD1WVtxm'
            }
        });
        let mail = {
            from: req.body.email,
            to: '_mainaccount@roselyne.re',
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