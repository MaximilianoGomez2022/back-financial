import express from 'express';
import cors from 'cors';
import NewsAPI from 'newsapi';

const app = express();
const newsapi = new NewsAPI('31bca8c94a954f229cc12bdde714cedd'); // Usar la clave desde variables de entorno

// Configurar CORS
app.use(cors({
    origin: ['http://localhost:3000', 'https://financial-arg.vercel.app']
}));

// Ruta para obtener noticias
app.get('/noticias', async (req, res) => {
    try {
        const url = `https://newsdata.io/api/1/latest?country=ar&category=business&apikey=pub_69496fe5f0d8f101e367d5d01756b70516f45`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error en la API de noticias');
        }

        res.json(data);
    } catch (error) {
        console.error('❌ Error al obtener noticias:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

export default app;
