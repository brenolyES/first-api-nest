import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './database/database.module';
import { TasksController } from './tasks/controllers/tasks.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TasksModule, DatabaseModule, ConfigModule.forRoot({isGlobal:true})],
})
export class AppModule {}
