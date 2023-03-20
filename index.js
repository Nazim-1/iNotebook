
const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

// connect with application/server

const { MongoClient, ServerApiVersion } = require('mongodb');
const MONGO_URL = "mongodb+srv://mymongoapp:mymongoappjs@cluster0.bpnais5.mongodb.net/iNotebook?retryWrites=true&w=majority";
const client = new MongoClient(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



connectToMongo();
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

//static files
app.use(express.static(path.join(__dirname, './build')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`iNotebook backend listening on port ${process.env.PORT}`)
})
