const express = require('express');
const router = express.Router();
const connection = require('../mongo').connect();
const Phone = require('../models/model');


/* GET home page. */
router.get('/', function (req, res, next) {
    Phone.find({}, (err, phones) => {
        if (err) console.log('error');

        //console.log(phones);
        res.render('index', {phones: phones});
    })
});

router.get('/phone/:id', (req, res, next) => {
    Phone.findById(req.params.id, (err, phone) => {
        if (err) console.log('error finding by id');

        res.render('phone', {phone: phone})
    })
});

router.get('/edit/:id', (req, res, next) => {
    Phone.findById(req.params.id, (err, phone) => {
        if (err) console.log('error finding by id');

        res.render('editing', {phone: phone})
    })
});

router.post('/edit/:id', (req, res, next) => {
    Phone.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        number: req.body.number
    }, {new: true}, (err, phone) => {
        if (err) console.log('error finding by id');

        res.render('phone', {phone: phone})
    })
});

router.get('/delete/:id', (req, res, next) => {
    Phone.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) console.log('err delete');

        console.log('deleted' + doc);
        res.render('info', {message: 'The contact has been deleted'})
    })
});

router.get('/create', (req, res, next) => {
    res.render('create')
});

router.post('/create', (req, res, next) => {
    let phone = new Phone({
        title: req.body.title,
        number: req.body.number
    });

    phone.save(err => {
        if (err) console.log(err);
        res.status(200)
    });

    res.render('info', { message: 'The contact has been created'})
});

module.exports = router;
