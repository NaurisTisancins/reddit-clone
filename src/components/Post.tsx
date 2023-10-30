import React, { FC } from 'react';

interface PostProps {
  subredditName: string;
}

const Post: FC<PostProps> = ({ subredditName }: PostProps) => {
  return (
    <div className="bg-white rounded-md shadow">
      <div className="flex justify-between px-6 py-4">
        {/* todo post votes */}

        <div className="flex-1 w-0">
          <div className="mt-1 text-xs text-gray-500 max-h-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
