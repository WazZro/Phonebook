const db_connect = require('../mongo');
const db = db_connect.connect();
const Article = require('../models/model');

Article.create({
    title: 'test 2',
    number: '64565682'

}, (err, doc) => {
    if(err) return console.log(err);
    console.log("Сохранен объект user", doc);
    db.close();
});