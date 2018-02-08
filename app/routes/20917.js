module.exports = (app) => {

    app.get('/2septembre2017',(req, res) => {
       res.render('20917.ejs', {
            layout: 'layout'
        })
    })

}