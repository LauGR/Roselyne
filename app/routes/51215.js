module.exports = (app) => {

    app.get('/5decembre2015',(req, res) => {
       res.render('51215.ejs', {
            layout: 'layout'
        })
    })

}