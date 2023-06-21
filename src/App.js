import { useState } from 'react';
import './App.css';
import CreateTask from './CreateTask';
import Header from './Header';
import Task from './Task';
import Footer from './Footer';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {/////////////////////////////////////////////////////////////////////////////
    debugger;    // debugger // console.log gibi görev yapar
    setTasks((prevTask) => {
      return [
        ...prevTask,
        newTask   //// aslında bizim burdaki newtaskımız CreateTaskda ki task ın title ve contentidir.
      ]
    })
  }

  const deleteTask = (id) => {///////////////////////////////////////////////////////////////////////////////////////////
    debugger;
    setTasks((prevTask) => {
      return prevTask.filter((taskItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask} />
      <div className='container'>
        <div className="row my-5">
          {tasks.map((taskItem, index) => {
            return (
              <Task
                key={index}
                id={index}
                title={taskItem.title}
                content={taskItem.content}
                delete={deleteTask}
              />
            )
          })}
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default App;


// Materyal uı kuruyoruz
// React bootstrap ı kuruyoruz
// İconlar için materyal uı icon u kurmalıyız, muı dan ayrı bir pakettir