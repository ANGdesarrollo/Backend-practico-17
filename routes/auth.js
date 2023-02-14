const express = require('express');
const Router = express.Router;
const auth = require("../controllers/auth.js").auth;
const destroySession = require("../controllers/auth.js").destroySession;
const registerUser = require("../controllers/auth.js").registerUser;
const isAuthenticated = require("../controllers/auth.js").isAuthenticated;
const passport = require("passport");
const checkAuthentication = require("../middlewares/authentication.js").checkAuthentication;

const routerAuth = Router();

routerAuth.get('/', checkAuthentication, isAuthenticated)
routerAuth.get('/logout' , destroySession);
routerAuth.post( '/login', passport.authenticate('login'),  auth );
routerAuth.post('/register', passport.authenticate('signup'),  registerUser);

module.exports = routerAuth;


