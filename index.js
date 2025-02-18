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
        const response = await newsapi.v1.sources({
            country: 'ar'
        });

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener noticias' });
    }
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

export default app;
