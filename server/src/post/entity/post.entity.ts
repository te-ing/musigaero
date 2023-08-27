import { CommentInfoDto } from 'src/comments/dto/commentInfo.dto copy';
import { CommentEntity } from 'src/comments/entity/comments.entity';
import { UserInfoDto } from 'src/users/dto/userInfo.dto';
import { UserEntity } from 'src/users/entity/users.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Post')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  author: UserInfoDto;

  @Column({ length: 20 })
  petname: string;

  @Column()
  deathday: Date;

  @Column({ length: 30 })
  title: string;

  @Column()
  body: string;

  @Column('simple-array')
  image: string[];

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentInfoDto[];

  @Column({ default: 'standard' })
  type?: string;
}
