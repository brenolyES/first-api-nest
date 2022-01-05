import { Module } from '@nestjs/common';
import { TasksService } from './service/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks.entity';

@Module({
  providers: [TasksService],
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController]
})
export class TasksModule {}
