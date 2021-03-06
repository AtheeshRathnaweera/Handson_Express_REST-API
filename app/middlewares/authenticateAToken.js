const config = require('../../config/config');
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token

    jwt.verify(token, config.TOKEN_SECRET, function (err, decoded) {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.email = decoded.email

        console.log("rec email in token : " + decoded.email);
        next();// pass the execution off to whatever request the client intended
    });
};

module.exports = authenticateToken;