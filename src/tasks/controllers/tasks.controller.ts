import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOrUpdateTaskDto } from '../dtos/create-or-update-task.dto';


@ApiTags('Tasks')
@Controller('api/tasks')
export class TasksController {

  @ApiOperation({summary:'Retornar todas as tarefas.'})
  @Get()
  getAll() {
    return [1,2,3]
  }

  @ApiOperation({summary:'Retornar uma tarefa pelo id.'})
  @Get(':id')
  getOne(@Param('id') id:number){
    return id;
  }

  @ApiOperation({summary:'Criar uma tarefa.'})
  @Post()
  create(@Body() body: CreateOrUpdateTaskDto){
    return body;
  }

  @ApiOperation({summary:'Atualizar uma tarefa pelo id.'})
  @Put(':id')
  update(@Param('id') id:number, @Body() body:CreateOrUpdateTaskDto){
    return body;
  }

  @ApiOperation({summary:'Deletar uma tarefa pelo id.'})
  @Delete(':id')
  delete(@Param('id') id:number){
    return true;
  }

}
