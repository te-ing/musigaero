import { Injectable } from '@nestjs/common';
import { ulid } from 'ulid';
import * as AWS from 'aws-sdk';
import configService from 'src/config/configService';
import { UserInfoDto } from 'src/users/dto/userInfo.dto';
import { basename, extname } from 'path';

@Injectable()
export class UploadService {
  private readonly s3;

  constructor() {
    AWS.config.update({
      region: configService().aws.region,
      credentials: {
        accessKeyId: configService().aws.accessKey,
        secretAccessKey: configService().aws.secretKey,
      },
    });
    this.s3 = new AWS.S3();
  }

  async uploadImage(file: Express.Multer.File, user: UserInfoDto) {
    const userId = (user as UserInfoDto)?.id; // 유저 아이디
    const originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
    const ext = extname(originalname); // 확장자
    const baseName = basename(originalname, ext); // 확장자
    const fieldname = `${userId}-${baseName}-${ulid()}${ext}`;
    const key = `image/${fieldname}`;
    const params = {
      Bucket: configService().aws.bucket,
      ACL: 'private',
      Key: key,
      Body: file.buffer,
    };

    return new Promise((resolve, reject) => {
      this.s3.putObject(params, (err) => {
        if (err) reject(err);
        resolve({ key, originalname, fieldname });
      });
    });
  }
}
