import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOrUpdateTaskDto } from '../dtos/create-or-update-task.dto';
import { TasksService } from '../service/tasks.service';


@ApiTags('Tasks')
@Controller('api/tasks')
export class TasksController {

  constructor(private tasksService: TasksService){}

  @ApiOperation({summary:'Retornar todas as tarefas.'})
  @Get()
  async getAll() {
    const tasks = await this.tasksService.findAll();
    return {message: 'Listando todas as tarefas', tasks}
  }

  @ApiOperation({summary:'Retornar uma tarefa pelo id.'})
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id:number){
    const taskFound = await this.tasksService.findById(id);
    if(!taskFound){
      throw new NotFoundException('Id não encontrado');
    } 
    return {message: 'Listando uma tarefa por id.', task:taskFound}
  }

  @ApiOperation({summary:'Criar uma tarefa.'})
  @Post()
  async create(@Body() body: CreateOrUpdateTaskDto){
    const task = await this.tasksService.createTask(body); 
    return {message: 'tarefa criada com sucesso.', task}
  }

  @ApiOperation({summary:'Atualizar uma tarefa pelo id.'})
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id:number, @Body() body:CreateOrUpdateTaskDto){
    const task = await this.tasksService.updateTask(id, body); 
    return {message: 'tarefa atualizada com sucesso.', task}
  }

  @ApiOperation({summary:'Deletar uma tarefa pelo id.'})
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id:number){
    const task = await this.tasksService.deleteTask(id); 
    return {message: 'tarefa deletada com sucesso.', task}
  }

}
