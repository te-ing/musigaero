import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserLoginDto } from './dto/userLogin.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    await this.usersService.createUser(dto);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<any> {
    const { email, password } = dto;
    return await this.usersService.login(email, password);
  }
}
