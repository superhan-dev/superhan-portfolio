import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { TypeOrmDbConfig } from 'src/common/config/typeorm.db.config';
import { LoggerModule } from './logger.module';
import { ProjectModule } from './project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmDbConfig),
    LoggerModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}