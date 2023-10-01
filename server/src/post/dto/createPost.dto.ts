import { Transform } from 'class-transformer';
import { IsArray, IsDate, IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @Transform((params) => params.value.trim())
  @IsString()
  readonly email: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @MaxLength(30)
  readonly title: string;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly petname: string;

  @IsDate()
  readonly deathday: Date;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly body: string;

  @Transform((params) => params.value.trim())
  @IsArray()
  readonly image: string[];
}
