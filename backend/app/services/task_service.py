from typing import List
from uuid import uuid4

from backend.app.models.task_model import Task


class TaskService:
    """
    Handles all task-related business logic.
    """

    def __init__(self):
        self._tasks: List[Task] = []

    def create_task(self, title: str) -> Task:
        task = Task(
            id=str(uuid4()),
            title=title.strip()
        )
        self._tasks.append(task)
        return task

    def list_tasks(self) -> List[Task]:
        return self._tasks

    def toggle_task(self, task_id: str) -> Task:
        for task in self._tasks:
            if task.id == task_id:
                task.completed = not task.completed
                return task
        raise ValueError("Task not found")

    def toggle_priority(self, task_id: str) -> Task:  # NEW METHOD
        for task in self._tasks:
            if task.id == task_id:
                task.priority = not task.priority
                return task
        raise ValueError("Task not found")

    def delete_task(self, task_id: str) -> None:
        self._tasks = [t for t in self._tasks if t.id != task_id]