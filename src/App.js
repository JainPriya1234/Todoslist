import React, { useState } from "react";
import Todoitem from "./Todoitem";
import InputArea from "./InputArea";
function App() {
    
    const[items, setitems] = useState([ ]);
   
  function addItem(count){
    setitems((prevItems) => {
          return [...prevItems ,count ];
    })
   
 }

 function deleteItem(id){
     setitems((prevItems) => {
         return prevItems.filter(
            (item , index)=>{
                return index !==  id
            }
         )
     })
 }
return (
    <div className="container">
    <div className="heading">
      <h1>To-Do List</h1>
    </div>
     <InputArea 
     onAdd ={addItem}
     /> 
    <div>
        <ul>
            {
                items.map((todoItem , index) => (
                    <Todoitem 
                    key={index}
                    id={index}
                    text = {todoItem}
                   onChecked = {deleteItem}
                    />
                    
                ))
            }
          
        </ul>
       
    </div>

  </div>
);
}

export default App;
