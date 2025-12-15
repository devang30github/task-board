from fastapi import APIRouter

from backend.app.controllers.task_controller import (
    create_task,
    get_tasks,
    toggle_task,
    toggle_priority,  # NEW IMPORT
    delete_task
)
from backend.app.schemas.task_schema import TaskCreate, TaskResponse

router = APIRouter(
    prefix="/tasks",
    tags=["Tasks"]
)


@router.post("", response_model=TaskResponse)
def add_task(payload: TaskCreate):
    return create_task(payload.title)


@router.get("", response_model=list[TaskResponse])
def list_tasks():
    return get_tasks()


@router.patch("/{task_id}", response_model=TaskResponse)
def update_task(task_id: str):
    return toggle_task(task_id)


@router.patch("/{task_id}/priority", response_model=TaskResponse)  # NEW ENDPOINT
def update_priority(task_id: str):
    return toggle_priority(task_id)


@router.delete("/{task_id}", status_code=204)
def remove_task(task_id: str):
    delete_task(task_id)