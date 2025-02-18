import express from 'express';
import cors from 'cors';
import NewsAPI from 'newsapi';

import noticiasRouter from './services/noticias.services.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar CORS
app.use(cors({
    origin: ['https://financial-arg.vercel.app'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

// Usa las rutas definidas en el archivo de servicios
app.use(noticiasRouter);

// Ruta para el home
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

const newsapi = new NewsAPI('31bca8c94a954f229cc12bdde714cedd');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
