const mongoose = require('mongoose');

function connectionDB(uri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb') {
    return mongoose.connect(uri)
        .then(() => {
            console.log('MongoDB connected');
        })
        .catch((err) => {
            console.error('MongoDB error', err);
            throw err;
        });
}

module.exports = connectionDB;