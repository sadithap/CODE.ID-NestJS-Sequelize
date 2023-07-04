import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { sections } from './sections';
import { section_detail_material } from './section_detail_material';

export interface section_detailAttributes {
  secd_id?: number;
  secd_title?: string;
  secd_preview?: string;
  secd_score?: number;
  secd_note?: string;
  secd_minute?: number;
  secd_modified_date?: Date;
  secd_sect_id?: number;
}

@Table({ tableName: 'section_detail', schema: 'curriculum', timestamps: false })
export class section_detail
  extends Model<section_detailAttributes, section_detailAttributes>
  implements section_detailAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('curriculum.section_detail_secd_id_seq'::regclass)",
    ),
  })
  @Index({ name: 'section_detail_pk', using: 'btree', unique: true })
  secd_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(256) })
  secd_title?: string;

  @Column({ allowNull: true, type: DataType.STRING(1) })
  secd_preview?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  secd_score?: number;

  @Column({ allowNull: true, type: DataType.STRING(256) })
  secd_note?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  secd_minute?: number;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  secd_modified_date?: Date;

  @ForeignKey(() => sections)
  @Column({ allowNull: true, type: DataType.INTEGER })
  secd_sect_id?: number;

  @BelongsTo(() => sections)
  section?: sections;

  @HasOne(() => section_detail_material, { sourceKey: 'secd_id' })
  section_detail_material?: section_detail_material;
}
