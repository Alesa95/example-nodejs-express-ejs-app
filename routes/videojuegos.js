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

router.get('/new', function(req, res, next) {
  
  res.render('videojuegos/new_videojuego', { title: 'New videogame' });
});

router.get('/:id', async(req, res) => {
  
});

router.post('/new', async(req, res) => {
  let titulo = req.body.titulo;
  let consola = req.body.consola;

  insert(titulo, consola);

  res.redirect('/videojuegos');
});

async function get(id) {
  try {
    const database = client.db('db_comics');
    const collection = database.collection('videojuegos');
    const query = { _id: id };
    var videojuegos = await collection.findOne(query).toArray();
    console.log(videojuego);
    return videojuego;
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}

async function insert(titulo, consola) {
  try {
    const database = client.db('db_comics');
    const collection = database.collection('videojuegos');

    var doc = {
      titulo: titulo,
      consola: consola,
    };
    var result = await collection.insertOne(doc);
  } finally {
    //await client.close();
  }
}

async function run() {
    try {
      const database = client.db('db_comics');
      const collection = database.collection('videojuegos');
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
