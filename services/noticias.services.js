const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

// Ruta para obtener noticias desde la API externa
router.get('/noticias', async (req, res) => {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=31bca8c94a954f229cc12bdde714cedd');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener noticias' });
    }
});

module.exports = router