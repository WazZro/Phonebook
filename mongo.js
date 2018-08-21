const mongoose = require('mongoose');

module.exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/phones');
    let connection = mongoose.connection;
    connection.on("error", console.error.bind(console, "Error connection"));
    connection.once("open", callback => console.log('Connection succeeded'));
    return connection;
};