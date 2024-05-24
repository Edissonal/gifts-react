import { useState } from "react";
import {Addcategory,GiftsGrid } from "./components";


export const GiftExpertApp = () => {

    const [categories,subcategories] = useState(['One punch']);
    const onAddCategory=(newCategory)=>{
        console.log(newCategory);
        //categories.push('chuis')
        //subcategories(['Valorant',...categories,])
        if(categories.includes(newCategory)) return;
         subcategories(cat => [newCategory,...cat]);
    }

  return (
    <>
    <h1>GidftExperrtApp</h1>
    {/* Input */}
    <Addcategory 
    //subcategories={subcategories}
     onNewValue={value=> onAddCategory(value)}
     currentCategories={categories}
    />
    {/* Listado de targetas */}
    <button onClick={onAddCategory}>Agregar</button> 

        {
        categories.map((category)  =>
            <GiftsGrid 
            key={category}
            category={category}
            />
        )}
  
    </>
  )
}
