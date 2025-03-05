import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.entity';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = new this.taskModel(createTaskDto);
    return newTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  async updateTitle(id: string, title: string): Promise<Task> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid task ID');
    }
    const task = await this.taskModel.findById(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    task.title = title;
    return task.save();
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.taskModel.findByIdAndDelete(id);
    return !!result;
  }
}
