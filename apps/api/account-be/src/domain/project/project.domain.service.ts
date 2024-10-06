import { Injectable } from '@nestjs/common';
import { ProjectRepository } from 'src/infrastructure/project/repository/project.repository';
import { CreateProjectRequestDto } from 'src/presentation/dto/project/request/create-project.request.dto';

@Injectable()
export class ProjectDomainService {
  constructor(private readonly projectRepository: ProjectRepository) {}
  async create(dto: CreateProjectRequestDto): Promise<any> {
    return await this.projectRepository.create(dto);
  }

  async findOneByProjectName(projectName: string) {
    return await this.projectRepository.findOneByProjectName(projectName);
  }
}