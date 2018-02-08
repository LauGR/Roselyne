module.exports = (app) => {

    app.get('/14septembre2016',(req, res) => {
       res.render('140916.ejs', {
            layout: 'layout'
        })
    })

}