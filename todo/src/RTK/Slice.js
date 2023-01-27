import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const getinitialstate = ()=>{
//   const value = [
//     {
//     id:uuid(),
//     title:"JavaScript completed",
//     status : "Complete"
//   },{
//     id:uuid(),
//     title:"JavaScript+react completed",
//     status : "Incomplete"
//   }
// ]

//   const val1= JSON.stringify(value)
//   window.localStorage.setItem('todoItem',val1)
  const value = window.localStorage.getItem('todoItem');
  // if localStorage is not null
  if(value)
  {
    return JSON.parse(value)
  }

  window.localStorage.setItem('todoItem',[])
  return []

  
}

const initialState = {
  todoItem:getinitialstate()
}

//createSlice accepts object as an argument
  const todoSlice = createSlice({
    //name of slice
    name: 'todo',
    //initial state
    initialState,
    //reducer as an object
    reducers: {
      addItem : (state,action) => {
        // console.log(state)
        // console.log(typeof state.todoItem)
        state.todoItem.push({
          id: action.payload.id,
          title:action.payload.title,
          status:action.payload.status
        })
        window.localStorage.setItem('todoItem',JSON.stringify(state.todoItem))
      },
      
      deleteItem : (state,action)=>{
        const newState = state.todoItem.filter((item) => item.id !== action.payload);
        window.localStorage.setItem('todoItem',JSON.stringify(newState))
        return {todoItem:newState}
      },

      updateItem : (state,action) => {
        console.log(state)
       const newState = state.todoItem.map((a1) => {
            if (a1.id === action.payload.id) {
              return { ...a1, 
                title: action.payload.title,
                status: action.payload.status  };
            }
            return a1;
          });
          // console.log("new state=",newState)
          window.localStorage.setItem('todoItem',JSON.stringify(newState))
        return {todoItem:newState};
      },

      setItem : (state,action) => {
        return {todoItem:action.payload}
      }
    }
  })

export const { addItem,deleteItem,updateItem,setItem} = todoSlice.actions;
              
export default todoSlice.reducer;
 
    