const express = require('express');
const router = express.Router();
const db = require('../models');
const student = require('../models/student');

module.exports = (app) => {
    app.use('/student', router);
};

router.get('/all', (req, res, next) => {
    db.Student.findAll({ include: [db.House] }).then((students) => {
        res.json(students);
    }).catch(function (err) {
        return next(err);
    });
});

router.get('/id/:studentId', (req, res, next) => {
    db.Student.findOne({ where: { id: req.params.studentId } }).then((student) => {
        res.json(student);
    }).catch(function (err) {
        return next(err);
    });
});

router.post("/save", (req, res, next) => {
    db.Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dob: req.body.dob,
        houseId: 1
    }).then((student) => {
        var houseNumber = student.id % 4;
        console.log("hpouse nu : " + houseNumber);

        db.House.findOne({ where: { number: houseNumber } }).then((house) => {
            console.log(house.id);

            student.setHouse(house);
        }).catch(function (err) {
            return next(err);
        });
        res.json(student);
    }).catch(function (err) {
        return next(err);
    });
});