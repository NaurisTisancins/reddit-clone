import { Button } from '@/components/ui/Button';
import { db } from '@/lib/db';
import { notFound } from 'next/navigation';
import React from 'react';
import Editor from '@/components/Editor';

interface PageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: PageProps) => {
  const subreddit = await db.subreddit.findFirst({
    where: {
      name: params.slug,
    },
  });

  if (!subreddit) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="pb-5 border-b border-gray-200">
        <div className="flex flex-wrap items-baseline -mt-2 -ml-2">
          <h3 className="mt-2 ml-2 text-base font-semibold leading-6 text-gray-900">
            Create Post
          </h3>
          <p className="mt-1 ml-2 text-sm text-gray-500 truncate">
            in r/{params.slug}
          </p>
        </div>
      </div>
      {/* form */}
      <Editor subredditId={subreddit.id} />
      <div className="flex justify-end w-full">
        <Button type="submit" className="w-full" form="subreddit-post-form">
          {/* form attribute is an id to reference which form we want to submit */}
          Post
        </Button>
      </div>
    </div>
  );
};

export default page;
