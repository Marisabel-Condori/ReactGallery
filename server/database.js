import mongoose from 'mongoose'

// configuraciones en mongo
// estamos creando la bd en mongo, al poner ''gallery' 
// mongo creara la bd por mi

(async()=> {
    const db = await mongoose.connect('mongodb://localhost/galleryapp',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});
console.log('conectado a:', db.connection.name)
} )();//funcion inmediatamente invocada 
//'apenas importe el archivo ejecutaras esta funcion'


// funciona de manera asincrona
