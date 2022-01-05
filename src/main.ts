import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function configSwagger (app) {

  const config = new DocumentBuilder()
    .setTitle('API Tasks')
    .setDescription('First API Nest')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configSwagger(app);
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
