require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const usuarioRutas = require('./rutas/rutasUsuario');
const pokemonRutas = require('./rutas/rutasPokemon');
const capturaRutas = require('./rutas/rutasCapturado');

app.use(express.json());
app.use(cors());

app.use('/api/usuarios', usuarioRutas);
app.use('/api/pokemon', pokemonRutas);
app.use('/api/captura', capturaRutas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor corriendo en el puerto ${PORT}');
});