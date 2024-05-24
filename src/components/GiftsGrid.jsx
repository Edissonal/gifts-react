import React from 'react'
import { getGifst } from '../helpers/GetGifts';
import {useEffect,useState } from 'react';
import { GiftItem } from './GiftItem';
import { useFetchGifs } from '../../hooks/useFetchGifs';





export const GiftsGrid = ({category}) => {

  const {images,isloading}= useFetchGifs(category);
  console.log({isloading})

 /* const [images, setimages] = useState([]);

  const setImages= async()=>{
     const newimagnes = await getGifst(category);
      setimages(newimagnes);
  }
    useEffect(() => {
      setImages();
    
    }, []);*/

  return (
<>
 <h3>{category}</h3>
 {
  isloading &&(<h2>Cargando...</h2>)
 }

      <div className='card-grid'> 
      {
        images.map((images)  =>
        <GiftItem 
              key={images.id}
            {...images}
              />

        )}

      </div>
</>
  )
}
//export default GiftsGrid;