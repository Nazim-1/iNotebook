const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://mymongoapp:mymongoappjs@cluster0.bpnais5.mongodb.net/iNotebook"

mongoose.set("strictQuery", false);
const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGO_URL, ()=>{
        console.log("Connected to Mongo Successfully")
    })
}

module.exports = connectToMongo;
