module.exports = (app) => {
    app.get('/temoignage', (req, res) => {
        res.render('temoignage', { 
            layout: 'layout' 
        })
    })
}
