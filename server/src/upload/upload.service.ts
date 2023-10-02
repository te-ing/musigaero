import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { ulid } from 'ulid';

@Injectable()
export class UploadService {
  async uploadImage(files: Express.Multer.File[]) {
    files.forEach((file) => {
      const uniqueFileName = `${file.originalname}-${ulid()}`;
      const storage = diskStorage({
        destination: './public/images', // 이미지 업로드 디렉토리
        filename: (req, file, callback) => {
          console.log('req', req);
          console.log('file', file);
          callback(null, `${uniqueFileName}.${file.mimetype.split('/').pop()}`);
        },
      });

      storage._handleFile(null, file, (error) => {
        if (error) {
          return error;
        } else {
          return uniqueFileName;
        }
      });
    });
  }
}
