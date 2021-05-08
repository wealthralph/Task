import Header from './Components/Header';
import Task from './Components/Tasks';
import { useState } from 'react'




function App() {

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

  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder

  const toggleReminder = () => {

  }


  return (
    <div className="container">
      <Header greet='Task App' />
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete=
          {deleteTask} />) : (
        'No Task to show'
      )}
    </div>
  );
}

export default App;
