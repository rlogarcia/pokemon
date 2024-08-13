const { Pokemon } = require('../baseDatos');

const registrarPokemon = async (req, res) => {
  try {
    const { nombre, tipo,poder} = req.body;
    
    const pokemonExistente = await Pokemon.findOne({
        where: {
            nombre: nombre
        }
    });

    if (pokemonExistente) {
      return res.status(400).json({ error: 'El pokemon ya existe' });
    }

    const nuevoPokemon = await Pokemon.create({ nombre, tipo,poder });
    res.status(201).json({ message:'Pokemon creado',nuevoPokemon});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    registrarPokemon
};