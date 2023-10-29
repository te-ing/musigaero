import { ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, userInfo) {
    if (err || !userInfo) {
      throw err || new HttpException('로그인 정보를 찾을 수 없습니다.', HttpStatus.UNAUTHORIZED);
    }
    return userInfo;
  }
}
