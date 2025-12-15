from fastapi import HTTPException, status

from backend.app.services.task_service import TaskService

task_service = TaskService()


def create_task(title: str):
    return task_service.create_task(title)


def get_tasks():
    return task_service.list_tasks()


def toggle_task(task_id: str):
    try:
        return task_service.toggle_task(task_id)
    except ValueError:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found"
        )


def toggle_priority(task_id: str):  # NEW FUNCTION
    try:
        return task_service.toggle_priority(task_id)
    except ValueError:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found"
        )


def delete_task(task_id: str):
    task_service.delete_task(task_id)