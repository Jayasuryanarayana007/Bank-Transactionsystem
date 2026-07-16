const mongoose = require('mongoose');
const dns = require('dns');

function connectToDB() {
    dns.setServers(["1.1.1.1", "8.8.8.8"]);
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("server is connected to db");
        })
        .catch(err => {
            console.log("Error connecting to DB:", err);
            process.exit(1)
        })

}

module.exports = connectToDB;