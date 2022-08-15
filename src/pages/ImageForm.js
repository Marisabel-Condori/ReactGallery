import React, { useState } from 'react'
import axios from 'axios'

const ImageForm = () => {

  const [file, setFile] = useState()
  const [titulo, setTitulo] = useState('')

  const handleChange = e => {
    //console.log(e.target.files[0]) // informacion del archivo que estamos subiendo
    setFile(e.target.files[0])
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    //coloca el titulo y file en un solo archivo
    const formData = new FormData()
    // hacemos lo mismo que haciamos en postman mandando el archivo y el titulo
    formData.append('file', file);
    formData.append('titulo',titulo);

    //const res = await axios.post('http://localhost:4000/api/images/upload', formData)
    // estamos quitando http://localhost:4000 porque adicionamos proxy a package.json
    const res = await axios.post('http://localhost:4000/api/images/upload', formData)
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log(res)
    //al subir el archivo nos dara ERROR, usaremos PROXY porque estamos usando el 
    // backend y frontend en uno solo.
    // package.json: debajo de private:true/ "proxy":"http://localhost:4000"
    // Averiguar como hacer porque el proyecto estara aparte!!!.....
    // adicionar MODULO COURSE
  }

  return (
    <div className='col-md-4 offset-md-4'>
      <div className='card bg-dark text-light rounded:0 p:4'>
        <div className='card-body'>
          <h3>Subir Imagen</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="form-control bg-dark text-light my-3 rounded-0 " 
              placeholder='Escribe el titulo de tu foto'
              onChange={e=>setTitulo(e.target.value)}/>
            <input 
              type="file" 
              className="form-control bg-dark text-light rounded-0" 
              onChange={handleChange}/>
            <div className='my-3'>
              <button className='btn btn-success rounded-0 w-100'>Upload</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default ImageForm