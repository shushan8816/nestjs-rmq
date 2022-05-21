import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  app.setGlobalPrefix('slot');
  await app.listen(port, () => {
    console.log('Server started listening at PORT: ', port);
  });
}
bootstrap();
