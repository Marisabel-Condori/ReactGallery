import { Router } from "express";
 
const router = Router()

 router.get('/', (req, res) => {
    return res.json({
        msg: 'bienvenido a la API 0.1'
    })
 })

 export default router