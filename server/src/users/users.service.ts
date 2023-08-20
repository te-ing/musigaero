import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './entity/users.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(dto: CreateUserDto) {
    const userExist = await this.checkUserExists(dto.email);
    if (userExist) {
      throw new UnprocessableEntityException('해당 이메일로는 가입할 수 없습니다.');
    }
    await this.saveUser(dto);
  }

  private async checkUserExists(emailAddress: string): Promise<boolean> {
    const user = await this.usersRepository.findOne({
      where: {
        email: emailAddress,
      },
    });
    return user !== null;
  }

  private async saveUser(dto: CreateUserDto) {
    const user = new UserEntity();
    user.email = dto.email;
    user.nickname = dto.nickname;
    user.password = dto.password;
    await this.usersRepository.save(user);
  }

  async login(email: string, password: string) {
    const user = await this.usersRepository.findOne({
      where: { email, password },
    });

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다');
    }

    const userInfo = {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
    };

    return userInfo;
  }
}
