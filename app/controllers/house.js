const express = require('express');
const router = express.Router();
const db = require('../models');
const house = require('../models/house');

module.exports = (app) => {
    app.use('/house', router);
};

router.get('/all', (req, res, next) => {
    db.House.findAll().then((houses) => {
        res.json(houses);
    }).catch(function (err) {
        return next(err);
    });
});

router.get('/id/:houseId', (req, res, next) => {
    db.House.findOne({ where: { id: req.params.houseId } }).then((house) => {
        res.json(house);
    }).catch(function (err) {
        return next(err);
    });
});

router.post("/save", (req, res, next) => {
    db.House.create({ name: req.body.name, number: req.body.number }).then((house) => {
        res.json(house);
    }).catch(function (err) {
        return next(err);
    });
});

router.put("/update", (req, res, next) => {
    db.House.update({ name: req.body.name, number: req.body.number }, {
        where: { id: req.body.id }
    }).then((result) => {
        res.json(result);
    }).catch(function (err) {
        return next(err);
    });
});