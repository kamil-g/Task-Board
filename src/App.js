import React from 'react';
import './App.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [<AddCardButton func={this.addCard}/>]
    }
  }

  addCard = () => {
    const cards = [...this.state.cards];
    cards.splice(0, 0, <Card />);
    this.setState({
      cards: cards
    })
  }

  render() {
    return (
      <div className="board">
        {this.state.cards}
      </div>
    )
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      tasks: [<AddTaskButton func={this.addTask}/>]
    }
  }

  addTask = () => {
    const tasks = [...this.state.tasks];
    tasks.splice(0, 0, <Task />);
    this.setState({
      tasks: tasks
    })
  }

  changeValue = () => {
    let title = this.refs.title.value;
    this.setState({
      title: title
    })
  }

  render() {
  return (
    <div className="card">
    <input onChange={this.changeValue} ref="title" value={this.state.title} placeholder="Title"></input>
    {this.state.tasks}
    </div>
  )}
}

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskExpanded: false,
      taskExpandedStyle: {
        display: 'none'
      },
      arrowStyle: {
        transform: 'rotate(0deg)'
      }
    }
  }

  deleteTask = () => {
    alert("task done")
  }

  taskDone = () => {
    alert("task done")
  }

  taskSettings = () => {
    alert("settings opened")
  }

  showMore = () => {
    let taskExpanded = !this.state.taskExpanded
    let isExpanded = ''
    let isRotated = ''

    if(taskExpanded)
      isExpanded = "block"
    else
      isExpanded = "none"

    if(taskExpanded)
      isRotated = "rotate(180deg)"
    else
      isRotated = "rotate(0deg)"

    this.setState({
      taskExpanded: taskExpanded,
      taskExpandedStyle: {
        display: isExpanded
      },
      arrowStyle: {
        transform: isRotated
      }
    })
  }

  render() {
    return (
      <div className="task">
        <input placeholder="Title"></input>
        <TaskArrow arrowStyle={this.state.arrowStyle} func={this.showMore}/>
        <div className="taskExpanded" style={this.state.taskExpandedStyle}>
          <DeleteTaskButton func={this.deleteTask}/>
          <TaskDoneButton func={this.taskDone}/>
          <TaskSettingsButton func={this.taskSettings}/>
        </div>
      </div>
    )}
}

class AddCardButton extends React.Component {
  render() {
    return (<button className="addCardButton" onClick={this.props.func}> <i className="fas fa-plus"></i> </button>)
  }
}

class AddTaskButton extends React.Component {
  render() {
    return (<button className="addTaskButton" onClick={this.props.func}> <i className="fas fa-plus"></i> </button>)
  }
}

class TaskArrow extends React.Component {
  render() {
    return (<div className="taskArrow" onClick={this.props.func}><i className="fas fa-chevron-down" style={this.props.arrowStyle}></i></div>)
  }
}

class TaskDoneButton extends React.Component {
  render() {
    return (<button className="taskDoneButton" onClick={this.props.func}> <i className="fas fa-check"></i> </button>)
  }
}

class DeleteTaskButton extends React.Component {
  render() {
    return (<button className="deleteTaskButton" onClick={this.props.func}> <i className="fas fa-times"></i> </button>)
  }
}

class TaskSettingsButton extends React.Component {
  render() {
    return (<button className="taskSettingsButton" onClick={this.props.func}> <i className="fas fa-cog"></i> </button>)
  }
}

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
