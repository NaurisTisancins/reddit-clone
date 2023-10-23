import type { Session, User } from 'nex-auth';
import type { JWT } from 'next-auth/jwt';

type UserId = string;

declare module 'nex-auth/jwt' {
  interface JWT {
    ud: UserId;
    username?: string | null;
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId;
      username?: string | null;
    };
  }
}
