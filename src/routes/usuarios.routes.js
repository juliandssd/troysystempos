import {Router} from 'express';
import {MostrarUsuario} from '../controllers/usuarios.controller.js';
const routes = Router();
routes.get('/usuario/:Usuario/:Password',MostrarUsuario);

export default routes;