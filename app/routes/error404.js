module.exports = (app) => {

    // app.use((req, res) => {
    //     res.status(404).render('layout404', {
    //         layout: 'layout404'
    //     })
    //     // if (req.accepets('ejs')) {
    //     //     res.render('layout404', { url: req.url })
    //     //     return
    //     // }
    // })
    function errorHandler(err, req, res, next) {
        if (res.headersSent) {
            return next(err);
        }
        res.status(400);
        res.render('layout404', { error: err });
    }

}