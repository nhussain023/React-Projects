import {React} from "react";
import { useDispatch } from "react-redux";
 import {deleteItem,updateItem} from "../RTK/Slice"
  import Modal from './Modal';

export default function Template(props) {
  // const a = useContext(TodoContext);
  const dispatch = useDispatch();  
 const handleCheckboxChange = () => {   
   dispatch(updateItem({
    id:props.id,
    title:props.title,
    status: props.status === "Complete" ? "Incomplete" : "Complete"
   }))
  }; 

  const removeItem = () => {
    // a.removeTodo(props.id)
    console.log("id=",props.id)
    dispatch(deleteItem(props.id))
  }
  const modeUrl = `#id${props.id}`

  return (
    <div className="d-flex"> 
      <div >
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={handleCheckboxChange}
          checked={(props.status==='Complete') ? 'checked' : ''}
        />
      </div>
      <div className="d-flex-cus flex-column flex-grow-1">
    
        <div  style={(props.status==='Complete')? {textDecoration: 'line-through'}:{}}  >{props.title}</div>
       
        {/* <div>{props.id},{props.title},{props.status}</div> */}
      </div>
      <div className="d-flex justify-content-end">
        <div role="button" className="p-1 mx-2 bg-light-custom rounded" onClick={removeItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>
        <div role="button" className="p-1 bg-light-custom rounded" 
            data-bs-toggle="modal"
            data-bs-target= {modeUrl}
            data-bs-whatever="@mdo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pen"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
          </svg>
        </div>
        <Modal modelId = {props.id} pageTitle="Update TODO" addOrUpdateTitle = "Update Task" todoTitle={props.title} todoStatus={props.status}/>
        
      </div>
    </div>
  );
}
