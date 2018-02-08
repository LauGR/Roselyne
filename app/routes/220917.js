module.exports = (app) => {

    app.get('/22septembre2017',(req, res) => {
       res.render('220917.ejs', {
            layout: 'layout'
        })
    })

}