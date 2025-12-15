import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function TaskItem({ task, onToggle, onTogglePriority, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const getTaskStyle = () => {
    if (task.completed) {
      return 'bg-green-50 border-2 border-green-200'
    }
    if (task.priority) {
      return 'bg-amber-50 border-2 border-amber-300'
    }
    return 'bg-gray-50 border-2 border-gray-200'
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 p-4 rounded-lg hover:shadow-md transition-all group ${getTaskStyle()}`}
    >
      <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </div>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 text-green-500 rounded focus:ring-2 focus:ring-green-500 cursor-pointer"
      />

      <span className={`flex-1 text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'} transition-all`}>
        {task.title}
      </span>

      <button
        onClick={() => onTogglePriority(task.id)}
        className={`text-2xl transition-all ${task.priority ? 'opacity-100' : 'opacity-30 group-hover:opacity-60'}`}
        title="Toggle Priority"
      >
        {task.priority ? '⭐' : '☆'}
      </button>

      <button
        onClick={() => onDelete(task.id)}
        className="px-3 py-1 text-red-500 hover:bg-red-50 rounded-md opacity-0 group-hover:opacity-100 transition-all"
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem