const API_URL = '/tasks'

export async function getTasks() {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Failed to fetch tasks')
    return await response.json()
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return []
  }
}

export async function createTask(title) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })
    if (!response.ok) throw new Error('Failed to create task')
    return await response.json()
  } catch (error) {
    console.error('Error creating task:', error)
    return null
  }
}

export async function toggleTask(taskId) {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: 'PATCH'
    })
    if (!response.ok) throw new Error('Failed to toggle task')
    return await response.json()
  } catch (error) {
    console.error('Error toggling task:', error)
    return null
  }
}

export async function togglePriority(taskId) {
  try {
    const response = await fetch(`${API_URL}/${taskId}/priority`, {
      method: 'PATCH'
    })
    if (!response.ok) throw new Error('Failed to toggle priority')
    return await response.json()
  } catch (error) {
    console.error('Error toggling priority:', error)
    return null
  }
}

export async function deleteTask(taskId) {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: 'DELETE'
    })
    return response.ok
  } catch (error) {
    console.error('Error deleting task:', error)
    return false
  }
}