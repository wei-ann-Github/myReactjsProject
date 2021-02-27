import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Reference for useState: https://daveceddia.com/usestate-hook-examples/, section on useState with an array
// Reference for draggable cards: https://blog.usejournal.com/implementing-react-drag-and-drop-without-any-external-library-d7ec00437afb
// Other unused reference for DND
// - https://www.csscodelab.com/react-js-drag-and-drop/
// - https://www.csscodelab.com/simple-react-dnd-examples/
// - https://codepen.io/AbhiPatel18/pen/gNyeBR?editors=0110
// - https://codepen.io/renjar/pen/pdxBNB?editors=0010
// - https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/

// A SubBoardContent is used to define 
// 1. The task counter in each sub-board
// 2. The div for containing all the taks cards.
// 3. The div for containing the button for adding task cards
function SubBoardContent() {
  const [items, setItems] = useState([]);  // A list for tracking the contents of every task card created in a sub-board.
  const [taskId, setTaskId] = useState(0);  // A list for incrementing the taskid every time a card is create in the sub-board.

  // will be called when the add task button is clicked.
  const addCard = event => {
    event.preventDefault();
    setItems([
      ...items,
      // content of a task card.
      {
        // id: items.length,
        title: "Enter Task Title",
        content: "Enter Task Description",
        key: taskId,
      }
    ]);
    setTaskId(taskId + 1);  // increment taskId on add card
  };

  // hook for storing the task card being dragged.
  const draggingItem = useRef();
  const dragOverItem = useRef();

  // Handle dragging task card
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

  // Returns a subboard's counter, task cards and add task button 
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

// returns a sub-board with the sub-board title and sub board content.
const SubBoard = (props) => {
    return(
      <div className='subBoard'>
        <div className='subBoardName'>{props.title}</div>
        <SubBoardContent />
      </div>
    )
}

// The main UI of the trello-clone
// Contains all the sub boards
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
