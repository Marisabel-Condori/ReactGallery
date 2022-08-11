import { Router } from "express";
import AWS from 'aws-sdk'
import config from '../routes/config'

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
        console.log('===> uploadObject');
        const uploadObject = await s3.putObject({
            ACL:  'public-read',
            Bucket: config.BucketName,
            Body: file.data,
            Key: file.name 
        }).promise();
        console.log('+++++++++++++++++++++++++++++')
        const urlImage = `https://${config.BucketName}.${config.Endpoint}/${file.name}`
        console.log(urlImage)
        console.log('----------------------------')

    } catch (error) {
        console.log('********************************')
        console.log(error)
        res.send(error)
    }
    // ahora se hara conexion con la bd(ir a database.js)
    console.log('********************************')
    // ERROR... no me muestra 'recibido...' en postman
    return res.json('recibido...')
})
router.get('/api/images', async (req, res) => {})
router.get('/api/images/:id', async (req, res) => {})
router.delete('/api/images/:id', async (req, res) => {})



export default router