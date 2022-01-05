import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../tasks.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private readonly taskRepository : Repository<Task>) { }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findById(id: number): Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  createTask (body:Partial<Task>): Promise<Task>{
    return this.taskRepository.save(body);
  }

  updateTask (id: number, body:Partial<Task>): Promise<Task>{
    body.id = id;
    return this.taskRepository.save(body);
  }

  deleteTask(id: number):Boolean{
    this.taskRepository.delete(id);
    return true;
  }
}
