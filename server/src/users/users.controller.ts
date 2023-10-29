import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserLoginDto } from './dto/userLogin.dto';
import { UsersService } from './users.service';
import { Response } from 'express';
import { JwtAuthGuard } from './users.guard';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create')
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    await this.usersService.createUser(dto);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto, @Res() res: Response): Promise<any> {
    const { email, password } = dto;
    const response = await this.usersService.login(email, password);
    res.setHeader('Authorization', 'Bearer ' + response.accessToken);

    return res.status(200).json(response);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/my')
  getProfile(@Req() req): any {
    return req.userInfo;
  }
}
