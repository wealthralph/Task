import Header from './Components/Header';
import Task from './Components/Tasks';
import Addtask from './Components/Addtask';
import { useState } from 'react'




function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctors appoinment ',
      day: 'Feb 5th at 2:30pm',
      reminder: true

    },
    {
      id: 2,
      text: 'Basketball Game ',
      day: 'Feb 5th at 2:30pm',
      reminder: true

    },
    {
      id: 3,
      text: 'Pussy appointment ',
      day: 'Feb 5th at 2:30pm',
      reminder: false

    }
  ])

  // Add task 
  const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id , ...task}
      setTask([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTask(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))

  }

  return (
    <div className="container">
      <Header greet='Task App' onAdd= {() => setShowAddTask(!showAddTask) } showAdd= {showAddTask} />
      {showAddTask && <Addtask onAdd= {addTask}/>}
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete=
          {deleteTask} onToggle={toggleReminder} />) : (
        'No Task to show'
      )}
    </div>
  );
}

export default App;
