import React from 'react'
import x from "./img/cross.jpg";
export default function ToDoList(props) {
   
    return (
    <div style={{display:"flex ", backgroundColor:"skyblue",justifyContent:"space-between",margin:"10px",padding:"10px"}}>
 
   <li>
    
    {props.text}
    
    </li>
    
 
      <img src={x} height="30px" style={{marginLeft:"50px",borderRadius:"50%"}} onClick={()=>{props.Delete(props.id);}}></img> 
    </div>
  )
}
