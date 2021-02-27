import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// https://daveceddia.com/usestate-hook-examples/
// See section on useState with an array

function SubBoardContent() {
  const [items, setItems] = useState([]);  // stores card content.
  const [taskId, setTaskId] = useState(0);

  const addCard = event => {
    event.preventDefault();
    setItems([
      ...items,
      {
        // id: items.length,
        title: "Enter Task Title",
        content: "Enter Task Description",
        key: taskId,
      }
    ]);
    setTaskId(taskId + 1);
  };

  return (
    <div className='subBoardContent'>
      <div className='taskCount'>{items.length} tasks</div>
      <div className='taskArea'>
        {items.map(item => (
          <div className='taskCard' 
            key={item.key}
          >
            <input placeholder={'Task #' + item.key + ' ' + item.title}
              className='taskTitle'
            />
            <textarea rows="5" name="text" placeholder={item.content} className='taskContent'/>
          </div>
        ))}
      </div>
      <div className='buttonDiv'>
      <button className='addTaskButton'
        onClick={addCard}>(+) ADD TASK</button>
      </div>
    </div>
  );
}

const SubBoard = (props) => {
    return(
      <div className='subBoard'>
        <div className='subBoardName'>{props.title}</div>
        <SubBoardContent />
      </div>
      
    )
}

 function Board () {
   return (
     <div className='board'>
       <div className="header">React Assignment - Task Board</div>
       <SubBoard title='Pending'/>
       <SubBoard title='In Progress'/>
       <SubBoard title='Completed'/>
     </div>
   );
 }

ReactDOM.render(
        <Board />,
        document.getElementById('root') 
      );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
