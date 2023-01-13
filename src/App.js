import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'


function App() {

  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'study',
        day: 'Feb 2023',
        reminder: true,
      },
      {
        id: 2,
        text: 'clean',
        day: 'march 2023',
        reminder: true,
      },
      {
        id: 3,
        text: 'cry',
        day: 'now',
        reminder: false,
      },
    ]
  )

  //add task
  const addTask=(task)=>{
   const id =Math.floor(Math.random()*10000)+1
   const newTask ={id, ...task}
   setTasks([...tasks, newTask])
  }


  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete',id)
  }


  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task))
      console.log('toggle',id)

  }


  return (
    <div className="container">
      <Header title='tracker' onAdd={()=>setShowAddTask(!showAddTask)} 
      showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle=
        {toggleReminder} /> : 'no tasks'}
    </div>
  );
}




export default App;
