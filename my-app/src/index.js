import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Card extends React.Component {
  render() {
    return (
      <div className="taskCard" taskid="{this.props.taskid}">
        {/*<p>{this.props.tasktitle}</p>*/}
        <p>Task Title {this.props.taskid}</p>
      </div>
    );
  }
}

class Addtaskbutton extends React.Component {
  render() {
    return (
      <button
        className="addtaskbutton"
        onClick={() => this.props.onClick()}
      >
        (+) ADD TASK
      </button>
    )
  }
}

class CardCounter extends React.Component {
  render() {
    return (
      <div className="taskcount">{this.props.cardcount} tasks</div>
    )
  }
}

class Subboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardcount: 0,
    };
  }

  renderaddtaskbutton() {
    return (
      <Addtaskbutton
        onClick={() => this.handleClick()}
      />
    );
  }

  handleClick() {
    this.setState({cardcount: this.state.cardcount + 1 })
  }

  renderCardCount() {
    return <CardCounter cardcount={this.state.cardcount} />;
  }

  renderCard(i) {
    return <Card />;
  }

  render(subboardname) {
    return (
      <div className="subBoard">
        <div className="subboardname">{this.props.subboardname}</div>
        {this.renderCardCount()}
        <div className="taskrow">
          {this.renderCard(0)}
          {this.renderCard(0)}
          {this.renderCard(0)}
        </div>
        <div className="buttondiv">
          {this.renderaddtaskbutton()}
        </div>
      </div>
    );
  }
}

class Board extends React.Component {
  rendersubboard(subboardname) {
    return <Subboard subboardname={subboardname} />;
  }

  render() {
    return (
      <div className="main">
        <div className="header">React Assignment - Task Board</div>
        <div className="desktop">
          {this.rendersubboard("Pending")}
          {this.rendersubboard("In Progress")}
          {this.rendersubboard("Completed")}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Board />,
  //<Card />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
