import React from "react";
import NoTodoTemplate from "./NoTodoTemplate";
import { useSelector } from "react-redux";
// import TodoContext from "../context/TodoContext";
import Template from "./Template";

export default function Crud() {
     const Item = useSelector((state)=>state.todo.todoItem)
  // const Item = JSON.parse(window.localStorage.getItem("todoItem"));
  // console.log("Item length is:", Item.length);
//   Item.map((a1) => console.log(a1.title));

  console.log(Item)
  return (
    <div className="grid-container">
      {Item.length===0 ? (
        <NoTodoTemplate />
      ) : (
        Item.map((a1) => (
          <div key={a1.id} className="grid-items">
            <Template title={a1.title} status={a1.status} id={a1.id} />
          </div>
        ))
      )}

      {/* <NoTodoTemplate/> */}
      {/* {Item.map(a1=>(
            <div key={a1.id} className="grid-items" ><Template title = {a1.title} status={a1.status} id={a1.id}/></div>
       ))} */}
    </div>
  );
}
