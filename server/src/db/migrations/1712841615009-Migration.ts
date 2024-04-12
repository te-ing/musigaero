import { MigrationInterface, QueryRunner } from 'typeorm';
import userSeed from './seeds/user.seed';
import postSeed from './seeds/post.seed';

export class Migration1712841615009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE User (
        id int NOT NULL AUTO_INCREMENT,
        email varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
        nickname varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
        password varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
        createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        PRIMARY KEY (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
    );
    await queryRunner.query(
      `CREATE TABLE Post (
        id int NOT NULL AUTO_INCREMENT,
        title varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
        image text COLLATE utf8mb4_unicode_ci NOT NULL,
        type varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'standard',
        authorId int DEFAULT NULL,
        petname varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
        deathday datetime NOT NULL,
        createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        nickname varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
        body text COLLATE utf8mb4_unicode_ci NOT NULL,
        PRIMARY KEY (id),
        KEY FK_cef8d6e8edb69c82e5f10bb4026 (authorId),
        CONSTRAINT FK_cef8d6e8edb69c82e5f10bb4026 FOREIGN KEY (authorId) REFERENCES User (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
    );
    await queryRunner.query(
      `CREATE TABLE Comment (
        id int NOT NULL AUTO_INCREMENT,
        password varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        body varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL,
        replyId int DEFAULT NULL,
        postId int DEFAULT NULL,
        author int DEFAULT NULL,
        createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        nickname varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
        PRIMARY KEY (id),
        KEY FK_378464bce485bcb5ca406bf6033 (replyId),
        KEY FK_fb770b565e79f3a4a2ecef894a7 (postId),
        CONSTRAINT FK_378464bce485bcb5ca406bf6033 FOREIGN KEY (replyId) REFERENCES Comment (id),
        CONSTRAINT FK_fb770b565e79f3a4a2ecef894a7 FOREIGN KEY (postId) REFERENCES Post (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
    );
    await queryRunner.query(`
    INSERT INTO User (id, email, nickname, password, createdAt, updatedAt) VALUES 
    ${userSeed
      .map((v) =>
        Object.values(v)
          .map((inner) => (typeof inner === 'string' ? `'${inner}'` : inner))
          .join(','),
      )
      .map((v) => `(${v})`)
      .join(',')};`);
    await queryRunner.query(`
      INSERT INTO Post (id, title, image, type, authorId, petname, deathday, createdAt, updatedAt, nickname, body) VALUES 
    ${postSeed
      .map((v) =>
        Object.values(v)
          .map((inner) => (typeof inner === 'string' ? `'${inner}'` : inner))
          .join(','),
      )
      .map((v) => `(${v})`)
      .join(',')};`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS comment;`);
    await queryRunner.query(`DROP TABLE IF EXISTS post;`);
    await queryRunner.query(`DROP TABLE IF EXISTS user;`);
  }
}
