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
import { program_entity } from './program_entity';

export interface program_reviewsAttributes {
  prow_user_entity_id: number;
  prow_prog_entity_id: number;
  prow_review?: string;
  prow_rating?: number;
  prow_modified_date?: Date;
}

@Table({
  tableName: 'program_reviews',
  schema: 'curriculum',
  timestamps: false,
})
export class program_reviews
  extends Model<program_reviewsAttributes, program_reviewsAttributes>
  implements program_reviewsAttributes
{
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({ name: 'program_reviews_pk', using: 'btree', unique: true })
  prow_user_entity_id!: number;

  @ForeignKey(() => program_entity)
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({ name: 'program_reviews_pk', using: 'btree', unique: true })
  prow_prog_entity_id!: number;

  @Column({ allowNull: true, type: DataType.STRING(512) })
  prow_review?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prow_rating?: number;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  prow_modified_date?: Date;

  @BelongsTo(() => program_entity)
  program_entity?: program_entity;
}
