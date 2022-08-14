import {Schema, model} from 'mongoose'
// new Schema: para identificar que estamos usando en la base de datos
// no es un esquema fijo si no una manera de validar antes de guardarse en mongodb
// como la definicion de una tabla.......
const ImageSchema = new Schema({
    title: String,
    key: String,
    url:{
        type: String,
        required: true
    }
},{
    timestamps:true, // guarda los datos de cuando fue creado el archivo y 
                    //cuando fue actualizado por ultima vez
    versionKey:false
})

export default model('Image', ImageSchema)