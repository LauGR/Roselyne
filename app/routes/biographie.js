module.exports = (app) => {

    app.get('/biographie',(req, res) => {
        res.render('biographie', {
            layout: 'layout'
        })
    })
}