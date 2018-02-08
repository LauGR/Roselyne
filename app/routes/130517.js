module.exports = (app) => {

    app.get('/13mai2017',(req, res) => {
       res.render('130517.ejs', {
            layout: 'layout'
        })
    })

}