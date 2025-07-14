const mongoose = require('mongoose');

const viajeSchema = new mongoose.Schema({
  destino: String,
  fecha: Date,
  precio: Number,
});

module.exports = mongoose.model('Viaje', viajeSchema);