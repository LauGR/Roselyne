module.exports = (app) => {

    app.get('/actions',(req, res) => {
       res.render('actions.ejs', {
            layout: 'layout'
        })
    })

}