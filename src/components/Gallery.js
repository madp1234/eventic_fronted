import React, { useState } from "react";
import './Gallery.css';
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

const Gallery = () => {
  
  const [photos,setPhotos] = useState([]);
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
  

    useEffect(() =>{
           fetchPhotos();
    },[photos]);

    const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true);
    };
   


const fetchPhotos = async () => {
        try {
            const response = await fetch('/api/photos'); // Fetch from your backend endpoint
            const data = await response.json();
            setPhotos(data);
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };


    return (
      <>
        <p className="title">Gallery:</p>
        <div className={model ? 'model open' : 'model'}>
          <IoClose onClick={() => setModel(false)} />
          <img src={`data:image/png;base64,${tempimgSrc}`} alt="enlarged" />
        </div>
        <div className="gallery">
          {photos.map((item, index) => {
            return (
              <div className="pics" key={index} onClick={() => getImg(item.pic)}>
                 <img src={`data:image/png;base64,${item.pic}`} style={{ width: '100%' }} alt="event_image" />

              </div>
            );
            
          })}
          
        </div>
      </>
    );
  };
  
  export default Gallery;
  