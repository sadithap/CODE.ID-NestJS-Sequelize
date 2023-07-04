import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
} from '@nestjs/common';
import { ProgramEntityService } from '../program_entity/program_entity.service';
import { ProgramEntityDto } from './dto/program_entity.dto';
@Controller('program-entity')
export class ProgramEntityController {
  constructor(private service: ProgramEntityService) {}

  @Get()
  public async getAll() {
    return this.service.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: ParseIntPipe) {
    return this.service.findOne(id);
  }
  @Post()
  public async create(@Body() body: ProgramEntityDto) {
    return this.service.create(body);
  }
  @Delete(':id')
  public async delete(@Param('id') id: ParseIntPipe) {
    return this.service.delete(id);
  }
}
