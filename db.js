const mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://mymongoapp:mymongoappjs@cluster0.bpnais5.mongodb.net/iNotebook?retryWrites=true&w=majority"

mongoose.set("strictQuery", false);
const connectToMongo = ()=>{
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectToMongo;
