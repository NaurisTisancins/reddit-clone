'use client';

import { useCustomToast } from '@/hooks/use-custom-toast';
import { usePrevious } from '@mantine/hooks';
import { VoteType } from '@prisma/client';
import { FC, useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PostVoteClientProps {
  id: string;
  initialVotesAmt: number;
  initialVote?: VoteType | null;
}

const PostVoteClient: FC<PostVoteClientProps> = ({
  id,
  initialVotesAmt,
  initialVote,
}) => {
  const { loginToast } = useCustomToast();
  const [votesAmt, setVotesAmt] = useState<number>(initialVotesAmt);
  const [currentVote, setCurrentVote] = useState(initialVote);
  const prevVote = usePrevious(currentVote);

  useEffect(() => {
    setCurrentVote(initialVote);
  }, [initialVote]);

  return (
    <div className='flex gap-4 pb-4 pr-6 sm:flex-col sm:ga-0 sm:w-20'>
      <Button size='sm' variant='ghost' aria-label='upvote'>
        <ArrowBigUp
          className={cn('h-5 w-5 text-zinc-700', {
            'text-emerald-500 fill-emerald-500': currentVote === 'UP',
          })}
        />
      </Button>

      <p className='py-2 text-sm font-medium text-center text-zinc-900'>
        {votesAmt}
      </p>

      <Button size='sm' variant='ghost' aria-label='downvote'>
        <ArrowBigDown
          className={cn('h-5 w-5 text-zinc-700', {
            'text-red-500 fill-red-500': currentVote === 'UP',
          })}
        />
      </Button>

      <p className='py-2 text-sm font-medium text-center text-zinc-900'>
        {votesAmt}
      </p>
    </div>
  );
};

export default PostVoteClient;
