import express from 'express';
import cors from 'cors';
import { NewsAPI } from 'newsapi';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;
const newsapi = new NewsAPI(process.env.NEWS_API_KEY); // Usar la clave desde variables de entorno

// Configurar CORS
app.use(cors({
    origin: ['http://localhost:3000', 'https://financial-arg.vercel.app']
}));

// Ruta para obtener noticias
app.get('/noticias', async (req, res) => {
    try {
        const response = await newsapi.v2.topHeadlines({
            sources: 'bbc-news,the-verge',
            q: 'bitcoin',
            category: 'business',
            language: 'en',
            country: 'us'
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

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
