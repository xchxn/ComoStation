import { Injectable } from '@nestjs/common';
// import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';
// import { promisify } from 'util';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //Hash algorithm with Salt and save the user information at the database
  async saveUserInformation(
    id: string,
    name: string,
    password: string,
  ): Promise<any> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const user = await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({ id: id, name: name, password: hash })
      .execute();
    return user;
  }

  //회원가입 시 동일 id가 존재하는지 확인하는 함수
  //check that target id is existing
  async idValidCheck(id: string): Promise<any> {
    //database table에서 해당 id가 존재하는지 확인
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
    return !!user; // user가 존재하면 true, 존재하지 않으면 false 반환
  }
}
