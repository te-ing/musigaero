import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entity/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost.dto';
import { UserInfoDto } from 'src/users/dto/userInfo.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  async createPost(dto: CreatePostDto, user: UserInfoDto) {
    try {
      const post = new PostEntity();
      post.author = user;
      post.nickname = user.nickname;
      for (const key in dto) {
        post[key] = dto[key];
      }
      await this.postRepository.save(post);
      return post;
    } catch {
      throw new HttpException('포스트 생성에 실패했습니다', HttpStatus.BAD_REQUEST);
    }
  }

  async getPostList() {
    return await this.postRepository.find();
  }
}
