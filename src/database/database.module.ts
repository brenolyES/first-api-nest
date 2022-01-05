import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/tasks/tasks.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('HOST_PG'),
        port: configService.get<number>('PORT_PG'),
        username: configService.get<string>('USERNAME_PG'),
        password: configService.get<string>('PASSWORD_PG'),
        database: configService.get<string>('DATABASE_PG'),
        entities: [Task],
        synchronize: true,
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
        logger: 'debug',
        logging: true,
        autoLoadEntities: true,
      }),
    }),
  ]
})
export class DatabaseModule {}
