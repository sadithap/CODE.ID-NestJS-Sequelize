import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsDate,
} from 'class-validator';
export class ProgramEntityDto {
  // @IsNumber()
  // @IsNotEmpty()
  // public region_id: number;

  // @IsString()
  // @IsOptional()
  // public region_name: string;

  // @IsString()
  // public photo: string;

  @IsNumber()
  @IsNotEmpty()
  public prog_entity_id: number;

  @IsString()
  public prog_title: string;
  @IsString()
  public prog_headline: string;
  @IsString()
  public prog_type: string;
  @IsString()
  public prog_learning_type: string;
  @IsString()
  public prog_rating: string;
  @IsNumber()
  public prog_total_trinee: number;
  @IsDate()
  @IsOptional()
  public prog_modified_date: Date;
  @IsString()
  public prog_image: string;
  @IsString()
  public prog_best_seller: string;
  @IsString()
  public prog_price: string;
  @IsString()
  public prog_language: string;
  @IsNumber()
  public prog_duration: number;
  @IsString()
  public prog_duration_type: string;
  @IsString()
  public prog_tag_skill: string;
  @IsNumber()
  public prog_city_id: number;
  @IsNumber()
  public prog_cate_id: number;
  @IsNumber()
  public prog_created_by: number;
  @IsString()
  public prog_status: string;
}
