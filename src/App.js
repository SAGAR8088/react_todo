import React, {useState} from "react";
import complete from './complete.png';

import './index.css';
function App() {
    const [taskInput, updateTaskInput] = useState("");
    
    const [toDoList, updateToDOList] = useState([]);
   

    const [serachResults, setsearchResults] = useState([]);
    
    const inputE1 = useState("");
        const [serchTerm, setSearchTerm] = useState("");
    const inputKeyDown = (event) => {
        if (event.keyCode === 13) addNote();
    };

    const getTaskObject = (description, isComplete) => {
        return {
            description,
            isComplete
        }
    }
    const getSerchTerm = () => {
        props.searchKeyword(inputE1.current.value);
     };
    const addNote = () => {  
        if (!taskInput || !taskInput.length)
            return;
       
       
            toDoList.push(getTaskObject(taskInput, false));
        updateToDOList(toDoList);
        updateTaskInput("")
    };

    const deleteTask = (index) => {
        
        
        
        let splice = toDoList.filter((item, i) => i !== index);
        updateToDOList(splice);
    }


    const searchHandler = (searchTerm) => {
        setSearchTerm(serchTerm);

     if (searchTerm !==""){
         const newtoDoList = toDoList.filter((toDO) => {
             return object.value(toDo).join("").toLowerCase().include(serachTerm.toLowerCase);
         }
         );
         setsearchResults(newtoDoList);
     }
     else setSearchTerm(toDoList)

     }

    const markComplete = (index) => {
        const list = [...toDoList]
        li
        
        
        
        
        st[index].isComplete = !list[index].isComplete
        updateToDOList(list)
    }

    return (
        <div className="app-background">
            <p className="heading-text">To Do List <span role="img" aria-label="react"></span></p>
        
            <div className="ui search">
     <div className="ui icon input">
         
         <input type="text" placeholder="serch todo" className="prompt"/ value={props.term} onChange={getSerchTerm}>  
       
       
         <i className="search icon"></i>
     <div className="task-container column">
                <div className="row">
                 <input

                   ref={inputE1}
                        className="text-input"
                        value={taskInput}
                       
             onKeyDown={inputKeyDown}
              onChange={(event) => updateTaskInput(event.target.value)}
                    />
                    <button className="add-button" onClick={addNote}>
                        ADD
                    </button>
                </div>
                {toDoList?.length ?
                    toDoList.map((toDoObject, index) =>
                        <ListItem key={index} itemData={toDoObject} markComplete={markComplete}
                                
                        term={serchTerm}
                        searchKeyword={searchHandler}
                        index={index} deleteTask={deleteTask}/>) :
                    <p className="no-item-text"><span role="img" aria-label="react">👉</span> &nbsp;No Task Added !</p>}
            </div>
            <p className="footer-text">TO DO</p>
        </div>
    );
}

function ListItem(props) {
    return (
        <div className="list-item row jc-space-between">


            <span className={props.itemData.isComplete ? 'task-complete' : ''}
                  onClick={() => props.markComplete(props.index)}>{props.itemData.isComplete ? `✅ ` : ''}&nbsp;{props.itemData?.description}</span>
            
            
            <img className="complete-icon" src={complete} alt="delete-task"
                 onClick={() => props.deleteTask(props.index)}/>
        </div>
    );
}

export default App;