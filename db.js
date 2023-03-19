const mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://mymongoapp:mymongoappjs@cluster0.bpnais5.mongodb.net/iNotebook"

mongoose.set("strictQuery", false);
const connectToMongo = ()=>{
    mongoose.connect(MONGO_URL, ()=>{
        console.log("Connected to Mongo Successfully")
    })
}

module.exports = connectToMongo;
