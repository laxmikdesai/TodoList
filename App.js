
// import { useState } from 'react';
// import './style.css';
// function App() {
//   const[item,addItem]=useState("");
//   const[additem,add]=useState([]);
//   const AddEvent=(e)=>{
//     addItem(e.target.value);
//   }

//   const Add=()=>{
//     console.log("add");
//      add((oldItem)=>{
//       return [...oldItem,item];
//      });
//   };
//   return (

//     <>welcome
//     <div className="container">
//     <div className='sub-container'>
//       <h1>ToDoList</h1>
//       <input type="text" placeholder='Add Item' onChange={AddEvent}></input>
//       <button onClick={Add}>+</button>
//       <ol>
//    {
//    additem.map(
//     (itemval,i)=>{
//        return <li key={i}>{itemval}</li>
//        })}
//       </ol>
//     </div>
      
//     </div>
    
    
    
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./style.css";
import ToDoList from "./ToDoList";
const App=()=>{
  const[item,selectItem]=useState("");
  const[newItem,addNewItem]=useState([]);

  const addItem=(e)=>{
    selectItem(e.target.value)
  }
  const select=()=>{
    addNewItem((oldItem)=>{
      return [...oldItem,item];
    });
    selectItem('');

  }

  const deleteItem=(id)=>{
    console.log("delete");
    addNewItem((oldItem)=>{
     return oldItem.filter((arrEle,index)=>{
      return index !== id; 

     })
    });

}
  return(
   <>
   <div className="container">
    <div className="sub-container">
      <h1 className="">ToDoList</h1>
      <input type="text" placeholder="Enter input"  value={item} onChange={addItem}></input>
      <button onClick={select}>+</button>
      <ol>
        {
      newItem.map((itemval,index)=>{
        return <ToDoList text={itemval} key={index} id={index} Delete={deleteItem}/>
      })}
      </ol>
    </div>
   </div>
   </>
  )
}

export default App;




















