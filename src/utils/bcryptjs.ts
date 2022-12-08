import { compareSync, hashSync } from 'bcryptjs';

class Bcryptjs {
  getHash(password: string): string {
    return hashSync(password, 8);
  }

  compareHash(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}

export default new Bcryptjs();
