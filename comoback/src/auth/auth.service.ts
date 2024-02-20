import { Injectable } from '@nestjs/common';
// import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';
// import { promisify } from 'util';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  //Hash Algorithm with Salt
  async salt(password: string): Promise<any> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }
  async comparePassword(password: string, hash: any): Promise<any> {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  }
}
