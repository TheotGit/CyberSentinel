const express = require('express');
const { Pool } = require('pg');
const app = express();

// Configuración de conexión a PostgreSQL
const pool = new Pool({
  host: 'db',        // nombre del servicio en docker-compose
  user: 'postgres',
  password: 'postgres',
  database: 'miapp'
});

// Endpoint de prueba
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ server_time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error consultando la base de datos' });
  }
});

app.listen(3000, () => console.log('API corriendo en puerto 3000'));
