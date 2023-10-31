import { Body, Controller, Post, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';
import { JwtAuthGuard } from 'src/users/users.guard';

@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService, private readonly uploadService: UploadService) {}
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createPost(@Body() dto: CreatePostDto, @Req() req) {
    return await this.postService.createPost(dto, req.user);
  }

  @Post('/image')
  @UseInterceptors(FilesInterceptor('file'))
  async uploadFile(@UploadedFiles() files: Express.Multer.File[]) {
    return await this.uploadService.uploadImage(files);
  }
}
