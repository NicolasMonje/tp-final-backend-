const express = require('express');
const router = express.Router();
const Viaje = require('../models/Viaje');

router.get('/', async (req, res) => {
  const viajes = await Viaje.find();
  res.json(viajes);
});

router.post('/', async (req, res) => {
  const nuevo = new Viaje(req.body);
  await nuevo.save();
  res.json(nuevo);
});

router.put('/:id', async (req, res) => {
  const actualizado = await Viaje.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
});

router.delete('/:id', async (req, res) => {
  await Viaje.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Viaje eliminado' });
});

module.exports = router;