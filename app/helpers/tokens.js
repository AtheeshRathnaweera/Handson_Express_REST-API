const jwt = require("jsonwebtoken");
const config = require('../../config/config');
const { v4: uuidv4 } = require('uuid');
const db = require('../models');
var moment = require('moment');

module.exports = {
    generateAccessToken: function (email, userId) {
        console.log("jwt secret : " + config.TOKEN_SECRET);
        return jwt.sign(
            { email: email },
            config.TOKEN_SECRET,
            {
                expiresIn: '1800s',
                jwtid: uuidv4(),
                subject: String(userId)
            });
    },
    generateRefreshTokenFromAnAccessToken: function (userId, accessTokenId) {
        db.RefreshTokens.create({
            access_token_id: accessTokenId,
            is_used: false,
            is_invalidate: false,
            expiry_date: moment().add(7, 'days').toDate()
        }).then((refreshToken) => {
            var houseNumber = student.id % 4;
    
            db.House.findOne({ where: { number: houseNumber } }).then((house) => {
                student.setHouse(house);
            }).catch(function (err) {
                return next(err);
            });
            res.json(student);
        }).catch(function (err) {
            return next(err);
        });
    }
}