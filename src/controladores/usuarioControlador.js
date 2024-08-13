const { Usuario } = require('../baseDatos');

const registrarUsuario = async (req, res) => {
  try {
    const { cedula, email, nombre, edad} = req.body;
    
    const usuarioExistente = await Usuario.findByPk(cedula);
    
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    const nuevoUsuario = await Usuario.create({ cedula, email, nombre, edad });
    res.status(201).json({ message:'Usuario creado',nuevoUsuario});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    registrarUsuario
};