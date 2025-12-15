from dataclasses import dataclass

@dataclass
class Task:
    """
    Domain model representing a Task.
    """
    id: str
    title: str
    completed: bool = False
    priority: bool = False 
