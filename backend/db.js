const mongoose = require('mongoose')

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to the database successfully");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
}

//Parachacademy(01)