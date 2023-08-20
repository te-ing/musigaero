import { CommentInfoDto } from 'src/comments/dto/commentInfo.dto copy';
import { CommentEntity } from 'src/comments/entity/comments.entity';
import { PostEntity } from 'src/post/entity/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  email: string;

  @Column({ length: 10 })
  nickname: string;

  @Column({ length: 30 })
  password: string;

  @OneToMany(() => PostEntity, (post) => post.author)
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.author)
  comments: CommentInfoDto[];
}
