module.exports = (app) => {

    app.get('/seancephotos',(req, res) => {
       res.render('seancephotos.ejs', {
            layout: 'layout'
        })
    })

}