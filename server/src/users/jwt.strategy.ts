import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { id: number; email: string; nickname: string; iat: number; exp: number }) {
    const { email, exp, id, nickname } = payload;
    if (exp * 1000 - Date.now() < 0) {
      throw new HttpException('로그인 유효기간이 만료되었습니다', HttpStatus.UNAUTHORIZED);
    }
    return { id, email, nickname };
  }
}
