import { Controller, Delete, Get, Patch, Post, Put, Body, Query, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {

    constructor(private taskService: TaskService) {}

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    getAllTasks(@Query() query: any) {
        return this.taskService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        return this.taskService.getTask(parseInt(id));
    }

    @Post()
    @ApiOperation({ summary: 'Create a task' })
    createTask(@Body() task: CreateTaskDto) {
        return this.taskService.createTask(task);	
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
        return this.taskService.updateTask(task);
    }

    @Delete()
    removeTask() {
        return this.taskService.removeTask();
    }

    @Patch()
    updateTaskStatus() {
        return this.taskService.updateTaskStatus();
    }
}