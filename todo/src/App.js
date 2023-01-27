import { useDispatch } from "react-redux";
import "./App.css";
import Crud from "./components/Crud";
import Modal from "./components/Modal";
import { setItem } from "./RTK/Slice";

function App() {
  const dispatch = useDispatch();  
  const a = JSON.parse(window.localStorage.getItem('todoItem'))
  const handleSelect = (e) => {
    const val = e.target.value
    switch (val) {
      case 'incomplete':
        dispatch(setItem(a.filter((item) => item.status === 'Incomplete')))
        break;

      case 'complete':
        dispatch(setItem(a.filter((item) => item.status === 'Complete')))
      break;
    
      default:
        dispatch(setItem(a))
        break;
    }
    
  }

  return (
      <div className="container-custom my-5  ">
        <h1>TODO List</h1>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#idexampleModal"
            data-bs-whatever="@mdo"
          >
            Add Task
          </button>
          <select
            id="status"
            className="form-select"
            style={{width: "fit-content"}}
            //  className="button_button__zbfSX button_button__select__e4SjJ" 
            onChange={handleSelect}
          >
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Completed</option>
          </select>
        </div>
        <Modal
          modelId="exampleModal"
          pageTitle="Add TODO"
          addOrUpdateTitle="Add Task"
        />
        {/* <Modal/> */}
        <Crud />
      </div>
  );
}

export default App;
