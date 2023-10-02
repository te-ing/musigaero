import { Body, Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';

@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService, private readonly uploadService: UploadService) {}
  @Post('/create')
  async createPost(@Body() dto: CreatePostDto): Promise<void> {
    await this.postService.createPost(dto);
  }

  @Post('/image')
  @UseInterceptors(FilesInterceptor('file'))
  async uploadFile(@UploadedFiles() files: Express.Multer.File[]) {
    await this.uploadService.uploadImage(files);
  }
}
