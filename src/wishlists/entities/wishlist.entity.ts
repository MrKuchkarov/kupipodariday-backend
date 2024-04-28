import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString, IsUrl, Length, MaxLength, MinLength } from 'class-validator';
import { WishEntity } from '../../wishes/entities/wish.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity()
export class WishlistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(1, 250)
  @IsString()
  name: string;

  @Column()
  @IsString()
  @MinLength(1, {
    message: 'Необходим минимум 1 символ',
  })
  @MaxLength(1024, {
    message: 'Необходимо максимум 1500 символа',
  })
  description?: string;

  @Column()
  @IsUrl()
  image: string;

  @ManyToMany(() => WishEntity)
  @JoinTable()
  items: WishEntity[];

  @ManyToOne(() => UserEntity, user => user.wishlists)
  owner: UserEntity;
}
