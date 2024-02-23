import { Injectable, Inject } from '@nestjs/common';
// import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';
// import { promisify } from 'util';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  //Hash algorithm with Salt and save the user information at the database
  async saveUserInformation(
    id: string,
    nickname: string,
    password: string,
  ): Promise<any> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const user = await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({ id: id, nickname: nickname, password: hash })
      .execute();
    return user;
  }

  //회원가입 시 동일 id가 존재하는지 확인하는 함수
  //check that target id is existing
  async idValidCheck(id: string): Promise<any> {
    //database table에서 해당 id가 존재하는지 확인
    const user = await this.userRepository
      .createQueryBuilder()
      .select('u.id') // id 필드만 선택
      .from(User, 'u')
      .where('u.id = :id', { id: id })
      .getOne();
    // user가 존재하면 true, 존재하지 않으면 false 반환
    if (user === null) {
      console.log(user);
      return false;
    } else {
      console.log(user);
      return true;
    }
  }
  async nicknameValidCheck(nickname: string): Promise<any> {
    //database table에서 해당 id가 존재하는지 확인
    const user = await this.userRepository
      .createQueryBuilder()
      .select('u.nickname') // id 필드만 선택
      .from(User, 'u')
      .where('u.nickname = :nickname', { nickname: nickname })
      .getOne();
    // user가 존재하면 true, 존재하지 않으면 false 반환
    if (user === null) {
      console.log(user);
      return false;
    } else {
      console.log(user);
      return true;
    }
  }

  async login(id: string, password: string): Promise<any> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .select('u.id')
      .from(User, 'u')
      .where('u.id = :id', { id })
      .andWhere('u.password = :password', { password })
      .getOne();
    // user가 존재하고, 비밀번호가 일치하면 true, user가 존재하지 않거나 일치하지않으면 false 반환
    if (user === null) {
      console.log(user);
      return false;
    } else {
      console.log(user);
      return true;
    }
  }
}
