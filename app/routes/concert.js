module.exports = (app) => {

    app.get('/concert',(req, res) => {
       res.render('concert', {
            layout: 'layout'
        })
    })

}