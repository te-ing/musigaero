import { HttpException, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { ulid } from 'ulid';

@Injectable()
export class UploadService {
  async uploadImage(files: Express.Multer.File[]) {
    const result = [];
    files.forEach((file) => {
      const originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
      fs.writeFile(`./static/images/${ulid()}-${originalname}`, file.buffer, 'binary', (error) => {
        if (error) {
          throw new HttpException({ message: '저장 중 알 수 없는 오류가 발생했습니다.', error }, 500);
        }
      });
      result.push(`${ulid()}-${originalname}`);
    });
    return result;
  }
}
