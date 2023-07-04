import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { program_entity } from 'curriculum';

@Injectable()
export class ProgramEntityService {
  constructor(
    @InjectModel(program_entity) private serviceProgEn: typeof program_entity,
  ) {}

  async findAll(): Promise<program_entity[]> {
    return await this.serviceProgEn.findAll({});
  }
  async findOne(id): Promise<program_entity> {
    return await this.serviceProgEn.findOne({
      where: { prog_entity_id: id },
    });
  }
  async create(body): Promise<program_entity> {
    return await this.serviceProgEn.create({
      prog_title: body.prog_title,
      prog_headline: body.prog_headline,
      prog_type: body.prog_type,
      prog_learning_type: body.prog_learning_type,
      prog_rating: body.prog_rating,
      prog_total_trinee: body.prog_total_trinee,
      prog_image: body.prog_image,
      prog_best_seller: body.prog_best_seller,
      prog_price: body.prog_price,
      prog_language: body.prog_language,
      prog_duration: body.prog_duration,
      prog_duration_type: body.prog_duration_type,
      prog_tag_skill: body.prog_tag_skill,
      prog_city_id: body.prog_city_id,
      prog_cate_id: body.prog_cate_id,
      prog_created_by: body.prog_created_by,
      prog_status: body.prog_status,
    });
  }
  async delete(id): Promise<number> {
    return await this.serviceProgEn.destroy({
      where: { prog_entity_id: id },
    });
  }
}
