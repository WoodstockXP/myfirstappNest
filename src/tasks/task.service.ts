import { Injectable, HttpCode, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TaskService {

    private tasks = [];

    getTasks() {
        return this.tasks;
    }

    getTask(id: number) {
        const taskFound = this.tasks.find(task => task.id === id);

        if (!taskFound) {
            return new NotFoundException(`Task with id ${id} not found`);
        }
        
        return taskFound;
    }
    
    createTask(task: CreateTaskDto) {
        console.log(task)
        this.tasks.push({
            id: this.tasks.length + 1,
            ...task
        })
        return task;	
    }

    updateTask(task: UpdateTaskDto) {
        return 'Updating a task';
    }

    removeTask() {
        return 'Removing a task';
    }

    updateTaskStatus() {
        return 'Updating task status';
    }
}