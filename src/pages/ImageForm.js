import React from 'react'

const ImageForm = () => {
  return (
    <div className='col-md-4 offset-md-4'>
      <div className='card bg-dark text-light rounded:0 p:4'>
        <div className='card-body'>
          <h3>Subir Imagen</h3>
          <form>
            <input 
              type="text" 
              className="form-control bg-dark text-light my-3 rounded-0 " 
              placeholder='Escribe el titulo de tu foto'/>
            <input type="file" clasName="form-control bg-dark text-light rounded-0" />
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