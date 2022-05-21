import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ScoreModule } from './modules/score/score.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigService } from './database/typeorm-config.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SCORE_SERVICE',
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'score_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: TypeormConfigService) =>
        configService.createTypeOrmOptions(),
    }),
    ScoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
