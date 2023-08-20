import { Transform } from 'class-transformer';
import { IsArray, IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @Transform((params) => params.value.trim())
  @IsString()
  @MaxLength(30)
  readonly title: string;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly body: string;

  @Transform((params) => params.value.trim())
  @IsArray()
  readonly image: string[];
}
