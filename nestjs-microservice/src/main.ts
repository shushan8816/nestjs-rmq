import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { INestMicroservice } from '@nestjs/common';

export async function bootstrap(): Promise<INestMicroservice> {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`rmq://${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`],
        queue: 'score_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen();
  console.info('Microservice started successfully');
  return app;
}

void bootstrap();
