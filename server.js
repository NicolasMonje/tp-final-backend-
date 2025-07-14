const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const viajesRoutes = require('./routes/viajes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/tu_basedatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/viajes', viajesRoutes);

app.listen(3001, () => console.log('Servidor backend corriendo en puerto 3001'));