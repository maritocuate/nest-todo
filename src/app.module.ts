import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';

dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), TasksModule],
})
export class AppModule {}
