module.exports = (app) => {

    app.get('/9avril2016',(req, res) => {
       res.render('90416.ejs', {
            layout: 'layout'
        })
    })

}