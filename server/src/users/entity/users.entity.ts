import { CommentInfoDto } from 'src/comment/dto/commentInfo.dto';
import { CommentEntity } from 'src/comment/entity/comments.entity';
import { PostEntity } from 'src/post/entity/post.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  email: string;

  @Column({ length: 10 })
  nickname: string;

  @Column({ length: 60 })
  password: string;

  @OneToMany(() => PostEntity, (post) => post.author)
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.author)
  comments: CommentInfoDto[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
