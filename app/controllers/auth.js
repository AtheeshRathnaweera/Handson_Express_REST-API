const express = require('express');
const router = express.Router();
const db = require('../models');

const basicHelper = require('../helpers/basic');
const tokenHelper = require('../helpers/tokens');

module.exports = (app) => {
    app.use('/auth', router);
};

router.post('/login', (req, res, next) => {
    db.Student.findOne({ where: { email: req.body.email } }).then((student) => {
        const hashPassword = basicHelper.getHashedPassword(req.body.password);
        const generatedToken = tokenHelper.generateAccessToken(student.email, student.id);

        if (hashPassword === student.password) {
            res.status(200).json({ user: student, "token": generatedToken });
        } else {
            res.sendStatus(401);
        }
    }).catch(function (err) {
        return next(err);
    });
});

router.post('/refreshToken', (req, res, next) => {
    //check if the jwt token is valid

    //check if the refresh token exists and is linked to that token

    //if the jwt token has already expired

    //check if the refresh token is expired

    //check if the refresh token was used

    //check if the refresh token is invalidated
});
