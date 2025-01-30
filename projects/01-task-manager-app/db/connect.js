const mongoose = require('mongoose');

const connectToDB = async (url)=>{
    await mongoose.connect(url);
    console.log(`connected to BD ...`);
}

module.exports = connectToDB;