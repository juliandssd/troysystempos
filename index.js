import express from  'express';
import cors from 'cors';
import usuarios from './src/routes/usuarios.routes.js';
import salon from './src/routes/salon.routes.js';
import grupo from './src/routes/GrupoyProducto.routes.js';
import venta from './src/routes/Venta.routes.js';
import {PORT}  from  './config.js';
const app = express();

app.use(express.json());
app.use(cors());

app.use(salon);
app.use(usuarios);
app.use(grupo);
app.use(venta);
app.listen(PORT);

