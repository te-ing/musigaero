import { HttpException, HttpStatus, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/users.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { encodeHash } from 'src/utils/security';
import * as bcrypt from 'bcryptjs';

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
    user.password = encodeHash(dto.password);
    await this.usersRepository.save(user);
  }

  async login(email: string, password: string) {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) {
      throw new HttpException('해당 이메일은 존재하지 않습니다.', HttpStatus.UNAUTHORIZED);
    }
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new HttpException('비밀번호가 잘못되었습니다.', HttpStatus.UNAUTHORIZED);
    }
    const userInfo = {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
    };
    return userInfo;
  }
}
