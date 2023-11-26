import { Controller, Get, Post, Body, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createComment.dto';
import { JwtInfoGuard } from 'src/users/userInfo.guard';

@Controller('api/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @UseGuards(JwtInfoGuard)
  @Post('create')
  create(@Body() createCommentDto: CreateCommentDto, @Req() req) {
    return this.commentService.create(createCommentDto, req.user);
  }

  @Get('post/:id')
  async findAll(@Param('id') id: string) {
    return await this.commentService.getCommentsInfo(Number(id));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @UseGuards(JwtInfoGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Body() password: string, @Req() req) {
    return await this.commentService.remove(Number(id), password, req.user);
  }
}
