import { Router } from 'express';
import AWS from 'aws-sdk'
import config from '../routes/config'
import Image from '../models/image' // importar el MODELO image

const router = Router()

const spacesEndpoint = new AWS.Endpoint(config.Endpoint)


const s3 = new AWS.S3({
    endpoint: spacesEndpoint
});

router.post('/api/images/upload', async (req, res) => {
    const {file} = req.files;
    console.log(file) 

    //subir imagenes del servidor a digital ocean
    try {
        await s3.putObject({
            ACL:  'public-read',
            Bucket: config.BucketName,
            Body: file.data,
            Key: file.name 
        }).promise();
        console.log('+++++++++++++++++++++++++++++')
        const urlImage = `https://${config.BucketName}.${config.Endpoint}/${file.name}`
        console.log(urlImage)
        // forma de subir una imagen y guardarlo en la bd
        const image = new Image({
            url: urlImage,
            Key: file.name,
            title: req.body.title
        })

        await image.save(); // se guarda la imagen
        console.log('----------------------------')
        // ahora se hara conexion con la bd(ir a database.js)
        console.log('********************************')
        // ERROR... no me muestra 'recibido...' en postman
       // return res.json('recibido...')//cambiar recibido por => image
        return res.json('recibido...')
       //return res.json(image)
        

    } catch (error) {
        console.log('********************************')
        console.log(error)
        res.send(error)
    }
    return res.json('recibido...')
    
});
router.get('/api/images', async (req, res) => {
    const images = await Image.find()
    return res.json(images)
});
router.get('/api/images/:id', async (req, res) => {
    const image = await Image.findById(req.params.id)
    return res.json(image)
})
router.delete('/api/images/:id', async (req, res) => {
    const deleteImage = await Image.findByIdAndDelete(req.params.id);

    await s3.deleteObject({
        Bucket: config.BucketName,
        Key: deleteImage.key
    }).promise();
    res.json(deleteImage);
})

export default router