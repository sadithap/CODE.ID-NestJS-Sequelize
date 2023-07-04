import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { program_entity } from './program_entity';
import { section_detail } from './section_detail';

export interface sectionsAttributes {
  sect_id?: number;
  sect_prog_entity_id: number;
  sect_title?: string;
  sect_description?: string;
  sect_total_section?: number;
  sect_total_lecture?: number;
  sect_total_minute?: number;
  sect_modified_date?: Date;
}

@Table({ tableName: 'sections', schema: 'curriculum', timestamps: false })
export class sections
  extends Model<sectionsAttributes, sectionsAttributes>
  implements sectionsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('curriculum.sections_sect_id_seq'::regclass)",
    ),
  })
  @Index({ name: 'sections_pk', using: 'btree', unique: true })
  @Index({ name: 'sections_u1', using: 'btree', unique: true })
  sect_id?: number;

  @ForeignKey(() => program_entity)
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({ name: 'sections_pk', using: 'btree', unique: true })
  sect_prog_entity_id!: number;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  sect_title?: string;

  @Column({ allowNull: true, type: DataType.STRING(256) })
  sect_description?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  sect_total_section?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  sect_total_lecture?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  sect_total_minute?: number;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  sect_modified_date?: Date;

  @BelongsTo(() => program_entity)
  program_entity?: program_entity;

  @HasMany(() => section_detail, { sourceKey: 'sect_id' })
  section_details?: section_detail[];
}
