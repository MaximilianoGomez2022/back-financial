import express from 'express';
import cors from 'cors';

import noticiasRouter from './services/noticias.services.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar CORS
app.use(cors({
    origin: ['http://localhost:3000', 'https://financial-arg.vercel.app/noticias']
}));

// Usa las rutas definidas en el archivo de servicios
app.use(noticiasRouter);

// Ruta para el home
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
