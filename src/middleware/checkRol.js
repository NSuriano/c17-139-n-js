module.exports = {
    admin: (req, res, next) => {
        if (req.session.userLogin && req.session.userLogin.idRole === 3) {
            return next();
        } else if (req.session.userLogin && (req.session.userLogin.idRole === 1 || req.session.userLogin.idRole === 2)) {
            return res.redirect('/');
        } else {
            return res.redirect('/');//Debe redirigir a login
        }
    },
    logged: (req, res, next) => {
        if (req.session.userLogin && (req.session.userLogin.idRole === 3 || req.session.userLogin.idRole === 2 || req.session.userLogin.idRole === 1)) {
            return next();
        }
        return res.redirect('/');//Debe redirigir a login
    },
    Customer: (req, res, next) => {
        if (req.session.userLogin && (req.session.userLogin.idRole === 2)) {
            return next();
        } else {
            return res.redirect('/');
        }
    },
    Commerce: (req, res, next) => {
        if (req.session.userLogin && (req.session.userLogin.idRole === 1)) {
            return next();
        } else {
            return res.redirect('/');
        }
    },
    loggedNotAdmin: (req, res, next) => {
        if (req.session.userLogin && (req.session.userLogin.idRole === 1 || req.session.userLogin.idRole === 2)) {
            return next();
        } else {
            return res.redirect('/');
        }
    }
}