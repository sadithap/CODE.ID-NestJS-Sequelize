import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { program_reviews } from './program_reviews';
import { program_entity_description } from './program_entity_description';
import { sections } from './sections';

export interface program_entityAttributes {
  prog_entity_id?: number;
  prog_title?: string;
  prog_headline?: string;
  prog_type?: string;
  prog_learning_type?: string;
  prog_rating?: string;
  prog_total_trinee?: number;
  prog_modified_date?: Date;
  prog_image?: string;
  prog_best_seller?: string;
  prog_price?: string;
  prog_language?: string;
  prog_duration?: number;
  prog_duration_type?: string;
  prog_tag_skill?: string;
  prog_city_id?: number;
  prog_cate_id?: number;
  prog_created_by?: number;
  prog_status?: string;
}

@Table({ tableName: 'program_entity', schema: 'curriculum', timestamps: false })
export class program_entity
  extends Model<program_entityAttributes, program_entityAttributes>
  implements program_entityAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('curriculum.program_entity_prog_entity_id_seq'::regclass)",
    ),
  })
  @Index({ name: 'program_entity_pk', using: 'btree', unique: true })
  prog_entity_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(256) })
  prog_title?: string;

  @Column({ allowNull: true, type: DataType.STRING(512) })
  prog_headline?: string;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  prog_type?: string;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  prog_learning_type?: string;

  @Column({ allowNull: true, type: DataType.DECIMAL })
  prog_rating?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prog_total_trinee?: number;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  prog_modified_date?: Date;

  @Column({ allowNull: true, type: DataType.STRING(256) })
  prog_image?: string;

  @Column({ allowNull: true, type: DataType.STRING(1) })
  prog_best_seller?: string;

  @Column({ allowNull: true, type: DataType.DECIMAL })
  prog_price?: string;

  @Column({ allowNull: true, type: DataType.STRING(35) })
  prog_language?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prog_duration?: number;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  prog_duration_type?: string;

  @Column({ allowNull: true, type: DataType.STRING(512) })
  prog_tag_skill?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prog_city_id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prog_cate_id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prog_created_by?: number;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  prog_status?: string;

  @HasMany(() => program_reviews, { sourceKey: 'prog_entity_id' })
  program_reviews?: program_reviews[];

  @HasOne(() => program_entity_description, { sourceKey: 'prog_entity_id' })
  program_entity_description?: program_entity_description;

  @HasMany(() => sections, { sourceKey: 'prog_entity_id' })
  sections?: sections[];
}
