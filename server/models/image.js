import {Schema, model} from 'mongoose'
// new Schema: para identificar que estamos usando en la base de datos
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