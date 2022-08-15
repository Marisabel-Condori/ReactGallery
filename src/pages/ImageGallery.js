import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios' 

const ImageGallery = () => {

  const [images, setImages] = useState([])
  useEffect( ()=>{
    (async()=>{
      const res = await axios.get('http://localhost:4000/api/images')
      setImages(res.data);
    })();
  },[]);
  

  return (
    <div className='row'>
      { 
        images.map(image =>(
          <div 
            className='col-md-4 p-1'
            onClick={()=> console.log(image._id)}
            key={image._id}>
            <img src={image.url} className="img-fluid h-100 w-100 card-image" alt=''/>
          </div>
        ))
      }
    </div>
  )
}

export default ImageGallery