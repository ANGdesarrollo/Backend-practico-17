exports.checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log('entre')
        next();
    }
    else {
        res.json({
            status: false
        });
    }
}
