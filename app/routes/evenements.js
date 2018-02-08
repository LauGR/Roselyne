module.exports = (app) => {

    app.get('/evenements',(req, res) => {
       res.render('evenements', {
            layout: 'layout'
        })
    })

}