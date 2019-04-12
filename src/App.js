import React, { Component } from 'react';
import './App.css';

import TableTasks from './components/table/table';
import SimpleSnackbar from './components/snackbars/snackbars';
import SwipeableTemporaryDrawer from './components/drawer/drawer';
import { CreateTask } from './components/tasks/create-task';

class App extends Component {
  state = {
    tasks: [
      new CreateTask(0, 'ts', 'tet', 'dasdd', '32', 1, 'tr'),
      new CreateTask(1, 'ts', 'tet', 'dasdd', '32', 1, 'tr'),
      new CreateTask(2, 'ts', 'tet', 'dasdd', '32', 1, 'tr'),
      new CreateTask(3, 'ts', 'tet', 'dasdd', '32', 1, 'tr')
    ],
    curTask: {
      id: '',
      status: '',
      title: '',
      desc: '',
      date: '',
      important: '',
      tag: ''
    }
  };

  addNewTask = () => {
    const { curTask } = this.state;
    const { tasks } = this.state;
    const newTask = [...tasks, curTask];
    this.setState(() => {
      return {
        tasks: newTask
      };
    });
  };

  editTask = id => {
    console.log(id);
  };

  deleteTask = id => {
    console.log(id);
  };

  render() {
    return (
      <div>
        <h1>Список Задач</h1>
        <CurTaskContext.Provider curTask={this.state.curTask}>
          <SwipeableTemporaryDrawer />
          <TableTasks
            tasks={this.state.tasks}
            editTask={this.editTask}
            deleteTask={this.deleteTask}
            />
          <SimpleSnackbar />
        </CurTaskContext.Provider>
      </div>
    );
  }
}
export const CurTaskContext = React.createContext({
  this.state
});

export default App;
