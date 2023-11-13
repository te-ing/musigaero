import { Body, Controller, Get, Param, Post, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';
import { JwtAuthGuard } from 'src/users/users.guard';
import { UserInfoDto } from 'src/users/dto/userInfo.dto';
import { multerOptionsFactory } from 'src/factories/multer-options.factory';

@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService, private readonly uploadService: UploadService) {}
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createPost(@Body() dto: CreatePostDto, @Req() req) {
    return await this.postService.createPost(dto, req.user);
  }

  @Get('/list')
  async getPostList() {
    return await this.postService.getPostList();
  }

  @Get(':id')
  async getPostDetail(@Param('id') id: number) {
    return await this.postService.getPostDetail(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/local-image')
  @UseInterceptors(FilesInterceptor('file'))
  async uploadFile(@UploadedFiles() files: Express.Multer.File[]) {
    return await this.uploadService.uploadImage(files);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/image')
  @UseInterceptors(FilesInterceptor('file', 4, multerOptionsFactory()))
  async upload(@UploadedFiles() files: Express.MulterS3.File[]) {
    return files;
  }
}
