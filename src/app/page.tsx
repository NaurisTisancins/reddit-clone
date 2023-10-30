import { buttonVariants } from '@/components/ui/Button';
import clsx from 'clsx';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl">Your feed</h1>
      <div
        className={clsx(
          'grid',
          'grid-cols-1',
          'md:grid-cols-3',
          'gap-y-4',
          'md:gap-x-4',
          'py-6'
        )}
      >
        {/* feed */}

        {/* subreddit info */}
        <div
          className={clsx(
            'overflow-hidden',
            'h-fit',
            'rouded-lg',
            'border',
            'border-gray-200',
            'order-first',
            'md:border-last'
          )}
        >
          <div className={clsx('bg-emerald-100', 'px-6', 'py-4')}>
            <p
              className={clsx(
                'font-semibold',
                'py-3',
                'flex',
                'items-center',
                'gap-1.5'
              )}
            >
              <HomeIcon className="w-4 h-4" />
              Home
            </p>
          </div>

          <div
            className={clsx(
              '-my-3',
              'divide-gray-100',
              'px-6',
              'py-4',
              'text-sm',
              'leading-6'
            )}
          >
            <div className="flex justify-between py-3 gap-x-4">
              <p className="text-zinc-500">
                Your personal Breadit homepage. Come here to check in with your
                favorite communities.
              </p>
            </div>
            <Link
              href="/r/create"
              className={buttonVariants({
                className: 'w-full mt-4 mb-6',
              })}
            >
              Create Community
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
