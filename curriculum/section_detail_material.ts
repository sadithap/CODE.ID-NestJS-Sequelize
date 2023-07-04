import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { section_detail } from './section_detail';

export interface section_detail_materialAttributes {
  sedm_id?: number;
  sedm_filename?: string;
  sedm_filesize?: number;
  sedm_filetype?: string;
  sedm_filelink?: string;
  sedm_modified_date?: Date;
  sedm_secd_id?: number;
}

@Table({
  tableName: 'section_detail_material',
  schema: 'curriculum',
  timestamps: false,
})
export class section_detail_material
  extends Model<
    section_detail_materialAttributes,
    section_detail_materialAttributes
  >
  implements section_detail_materialAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('curriculum.section_detail_material_sedm_id_seq'::regclass)",
    ),
  })
  @Index({ name: 'section_detail_material_pk', using: 'btree', unique: true })
  sedm_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(55) })
  sedm_filename?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  sedm_filesize?: number;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  sedm_filetype?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  sedm_filelink?: string;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  sedm_modified_date?: Date;

  @ForeignKey(() => section_detail)
  @Column({ allowNull: true, type: DataType.INTEGER })
  sedm_secd_id?: number;

  @BelongsTo(() => section_detail)
  section_detail?: section_detail;
}
