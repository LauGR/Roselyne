module.exports = (app) => {

    app.get('/mentionslegales', (req, res) => {
        res.render('mentionslegales', {
            layout: 'layout'
        })
    })
}

