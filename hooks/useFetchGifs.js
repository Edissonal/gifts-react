import { useEffect, useState } from "react";
import { getGifst } from "../src/helpers/GetGifts";


export const useFetchGifs = (category) => {

 const [images, setimages] = useState([]);
 const [isloading, setisloading] = useState(true)
  const setImages= async()=>{
     const newimagnes = await getGifst(category);
      setimages(newimagnes);
      setisloading(false);
  }
    useEffect(() => {
      setImages();
    
    }, []);

return{
    images,
    isloading
}
}
