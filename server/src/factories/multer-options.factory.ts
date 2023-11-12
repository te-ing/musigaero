import { S3Client } from '@aws-sdk/client-s3';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multerS3 from 'multer-s3';
import { basename, extname } from 'path';
import configService from 'src/config/configService';
import { UserInfoDto } from 'src/users/dto/userInfo.dto';
import { ulid } from 'ulid';

export const multerOptionsFactory = (): MulterOptions => {
  return {
    storage: multerS3({
      s3: new S3Client({
        region: configService().aws.region,
        credentials: {
          accessKeyId: configService().aws.accessKey,
          secretAccessKey: configService().aws.secretKey,
        },
      }),
      bucket: configService().aws.bucket,
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      metadata(req, file, callback) {
        callback(null, { owner: (req.user as UserInfoDto)?.nickname || 'musigaero' });
      },
      key(req, file, callback) {
        const userId = (req.user as UserInfoDto)?.id ? `${(req.user as UserInfoDto)?.id}-` : ''; // 유저 아이디
        const ext = extname(file.originalname); // 확장자
        const baseName = basename(file.originalname, ext); // 확장자 제외
        // 파일이름-날짜.확장자
        const fileName = `image/${userId}${baseName}-${ulid()}${ext}`;
        callback(null, fileName);
      },
    }),
    // 파일 크기 제한
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  };
};
