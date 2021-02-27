import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Reference for useState: https://daveceddia.com/usestate-hook-examples/, section on useState with an array
// Reference for draggable cards: https://blog.usejournal.com/implementing-react-drag-and-drop-without-any-external-library-d7ec00437afb

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
    console.log('task items: ' + items)
  };

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
    console.log('drag start: ' + e.target.innerHTML + ' ' + e.target.key);
  };

  const handleDragEnter = (e, position) => {
   dragOverItem.current = position;
   console.log('dragging over: ' + e.target.innerHTML);
  };

  const handleDragEnd = (e) => {
    console.log('on drag end: draggingItem.current ' + draggingItem.current)
    const itemsCopy = [...items];
    const draggingItemContent = itemsCopy[draggingItem.current];
    itemsCopy.splice(draggingItem.current, 1);
    console.log('on drag end: dragoveritem ' + dragOverItem.current)
    itemsCopy.splice(dragOverItem.current, 0, draggingItemContent);

     draggingItem.current = null;
     dragOverItem.current = null;
     setItems(itemsCopy);
  };

  return (
    <div className='subBoardContent'>
      <div className='taskCounter'>{items.length} tasks</div>
      <div className='taskarea'>
        {items.map(item => (
          <div className='taskCard' 
            key={item.key}
            onDragStart={(e) => handleDragStart(e, item.key)}
            onDragEnter={(e) => handleDragEnter(e, item.key)}
            onDragEnd={handleDragEnd}
            draggable
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
