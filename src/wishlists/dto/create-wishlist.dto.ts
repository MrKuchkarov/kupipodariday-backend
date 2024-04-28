import {
  IsArray,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  @MinLength(2, {
    message: 'Необходимо ввести минимум 1 символ',
  })
  @MaxLength(250, {
    message: 'Необходимо ввести максимум 250 символов',
  })
  name: string;

  @IsString()
  @MaxLength(1500, {
    message: 'Необходимо ввести максимум 1500 символов',
  })
  description: string;

  @IsUrl()
  image: string;

  @IsArray()
  itemsId: number[];
}
