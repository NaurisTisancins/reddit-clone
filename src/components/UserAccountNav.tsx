import { User } from 'next-auth';
import React, { FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from './DropdownMenu';
import UserAvatar from './UserAvatar';

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="h-8 w-8"
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          {' '}
          hello madafake
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
