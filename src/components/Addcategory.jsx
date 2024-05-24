import { useState } from 'react';


export const Addcategory = ({onNewValue}) => {

  const [inputvalue, setInputvalue] = useState('One Punch');
  const onInputChange =({target})=>{
      setInputvalue(target.value);
  }
  const onSubmit =(event)=>{
  event.preventDefault();

  if(inputvalue.trim().length <=1) return;
  console.log(inputvalue);
 // subcategories(categories=>[inputvalue,...categories,]);
  onNewValue(inputvalue.trim());
  setInputvalue('');
  }
  return (
     <form onSubmit={onSubmit}>
        <input 
      type="text"
      placeholder="buscar keys"
      value={inputvalue}
      onChange={onInputChange}
      />
     </form>
   
  )
}

//export default Addcategory