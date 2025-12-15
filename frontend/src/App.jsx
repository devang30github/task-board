import { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import ProgressBar from './components/ProgressBar'
import FocusToggle from './components/FocusToggle'
import { getTasks, createTask, toggleTask, togglePriority, deleteTask } from './services/taskService'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [focusMode, setFocusMode] = useState(false)

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    setLoading(true)
    const data = await getTasks()
    setTasks(data)
    setLoading(false)
  }

  const handleAddTask = async (title) => {
    const newTask = await createTask(title)
    if (newTask) {
      setTasks([...tasks, newTask])
    }
  }

  const handleToggleTask = async (id) => {
    const updatedTask = await toggleTask(id)
    if (updatedTask) {
      setTasks(tasks.map(t => t.id === id ? updatedTask : t))
    }
  }

  const handleTogglePriority = async (id) => {
    const updatedTask = await togglePriority(id)
    if (updatedTask) {
      setTasks(tasks.map(t => t.id === id ? updatedTask : t))
    }
  }

  const handleDeleteTask = async (id) => {
    const success = await deleteTask(id)
    if (success) {
      setTasks(tasks.filter(t => t.id !== id))
    }
  }

  const handleReorder = (newTasks) => {
    setTasks(newTasks)
  }

  const filteredTasks = focusMode ? tasks.filter(t => !t.completed) : tasks
  const completedCount = tasks.filter(t => t.completed).length
  const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Task Board</h1>
          <p className="text-gray-500 text-center mb-8">Stay organized, stay focused</p>
          
          <FocusToggle focusMode={focusMode} onToggle={setFocusMode} />
          
          <ProgressBar progress={progress} completed={completedCount} total={tasks.length} />
          
          <TaskInput onAddTask={handleAddTask} />
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
            </div>
          ) : (
            <TaskList 
              tasks={filteredTasks}
              onToggle={handleToggleTask}
              onTogglePriority={handleTogglePriority}
              onDelete={handleDeleteTask}
              onReorder={handleReorder}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App