import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  program_entity,
  section_detail,
  sections,
  section_detail_material,
  program_entity_description,
  program_reviews,
} from 'curriculum';
import { ProgramEntityController } from 'src/program_entity/program_entity.controller';
import { ProgramEntityService } from 'src/program_entity/program_entity.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      program_entity,
      section_detail,
      sections,
      section_detail_material,
      program_entity_description,
      program_reviews,
    ]),
  ],
  providers: [ProgramEntityService],
  controllers: [ProgramEntityController],
})
export class GlobalModule {}
