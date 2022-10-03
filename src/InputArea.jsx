import React , {useState} from 'react'

function InputArea(props){
    const[count,setcount]= useState(" ");
  
    function handleChange(event){
        const newValue = event.target.value;
         setcount(newValue);
      }
     
  return (
    <div className="form">
    <input type="text"
     onChange={handleChange} 
     value={count} />
    <button onClick={() => {
        props.onAdd(count);
        setcount(" ");
    }}>
      <span>Add</span>
    </button>
  </div>
  );
}

export default InputArea
