module.exports = (app) => {

    app.get('/4mai2017',(req, res) => {
       res.render('40517.ejs', {
            layout: 'layout'
        })
    })

}