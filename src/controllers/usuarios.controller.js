import {pool} from '../db.js';

export const MostrarUsuario= async(req,res)=>{
    const {Usuario,Password} = req.params;
    const [result] = await pool.query('SELECT * FROM usuario',[Usuario,Password]);
    res.json(result);
}


