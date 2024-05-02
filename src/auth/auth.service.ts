import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserEntity } from '../users/entities/user.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  async login(user: UserEntity) {
    const payload = { sub: user.id };
    return { access_token: this.jwtService.sign(payload, { expiresIn: '7d' }) };
  }

  async validate(username: string, password: string) {
    const user = await this.usersService.findUserByUsername(username);

    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const isAMatch = await bcrypt.compare(password, user.password);

    if (!isAMatch) {
      throw new UnauthorizedException('Invalid username or password');
    }

    return { ...user };
  }

  async signup(createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
}
