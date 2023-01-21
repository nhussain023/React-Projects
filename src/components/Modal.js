import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Count} from '../RTK/CountSlice'
import {addItem,updateItem} from '../RTK/Slice'
import { useState } from "react";
import { v4 as uuid } from 'uuid';


export default function Modal(props) {
  const [todoItem, setTodoItem] = useState(props.todoTitle)
  const [stat, setstat] = useState(props.todoStatus)
  // const a = useContext(TodoContext);
  console.log("in modal props=",props.todoTitle)

  //const [temp,setTemp] = useState(1)
  const dispatch = useDispatch();
  
  // useEffect(()=>{
  //   console.log("use effect print",id)
  // })
   const id = useSelector((state)=> state.count)
  // const id = store.getState().count;
  const updateTodo = () => {
    const title = document.getElementById("todo-title").value;
    const status = document.getElementById("statusDropdown").value;
    // console.log(status)
    if (typeof props.todoTitle !== 'undefined') {
      // console.log(1,props.modelId,title)
      dispatch(updateItem({
        id:props.modelId,
        title:todoItem,
        status: stat
       }))
    }
    else{
    dispatch(addItem({
      id:uuid(),
      title:title,
      status:status
    }))
  
    dispatch(Count())
  }
    //setTemp(2)
    // a.addTodo(title, "Incomplete");
  };
  const handleSelectChange = (e)=>{
    const value = e.target.value;
    // console.log(value)
    setstat(value)
  }

  const handleTitleChange = (e)=>{
    const value = e.target.value;
    setTodoItem(value)
  }
  const modeUrl = `id${props.modelId}`
  return (
    <div
      className="modal fade"
      // id="exampleModal"
      id = {modeUrl}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.pageTitle}
              {/* Add TODO */}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="recipient-name"
                  className="col-form-label text-align-left"
                >
                  Title
                </label>
                <input type="text" className="form-control" id="todo-title" value={todoItem} onChange={handleTitleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Status
                </label>
                <select className="form-select" aria-label="Default select example" id="statusDropdown" onChange={handleSelectChange}>
                  <option value="Incomplete" selected={props.todoStatus === "Incomplete"} >Incomplete</option>
                  <option value="Complete" selected={props.todoStatus === "Complete"}>Complete</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={updateTodo}
            >
              {props.addOrUpdateTitle}
              {/* Add Task */}
            </button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              aria-label="Close">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
