import express  from 'express';
import fileUpload from 'express-fileupload';
   
import indexRoutes from './routes/indexRoutes'
import imagesRoutes from './routes/imagesRoutes'

import './database'

const app = express()
//app.use(express.json()) tal vez esta sea la solucion
 

//hacer correr en el local host 4000
app.set('port', process.env.PORT || 4000);
//app.get('/', (req, res) => res.send('hello world...'))
app.use(fileUpload({
    tempFileDir: '/temp'
}))
app.use(indexRoutes)     
app.use(imagesRoutes)

app.listen(app.get('port'))
console.log('Server on port: ', app.get('port'))