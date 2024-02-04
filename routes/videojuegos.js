var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

/* GET home page. */
router.get('/', async(req, res) => {
    var listaVideojuegos = run();

    res.render('videojuegos', { title: 'Videojuegos', videojuegos : await listaVideojuegos });
});

async function run() {
    try {
      const database = client.db('db_comics');
      const collection = database.collection('videojuegos');
      // Query for a movie that has the title 'Back to the Future'
      const query = {};
      var videojuegos = await collection.find(query).toArray();
      console.log(videojuegos);
      return videojuegos;
    } finally {
      // Ensures that the client will close when you finish/error
      //await client.close();
    }
  }

module.exports = router;
