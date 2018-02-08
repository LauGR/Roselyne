module.exports = (app) => {

    app.get('/discographie',(req, res) => {
       res.render('discographie', {
            layout: 'layout'
        })
    })

}