import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';

@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post('/create')
  async createPost(@Body() dto: CreatePostDto): Promise<void> {
    await this.postService.createPost(dto);
  }
}
