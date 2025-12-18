import { getQueryClient, trpc } from '@/trpc/server';
import { Client } from './client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

const Page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div>
      <h1 className="text-3xl">Welcome to the Page</h1>
      <p>This is a sample page component.</p>
      <div className='min-h-screen min-w-screen flex items-center justify-center'>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<p>Loading...</p>}>
            <Client />
          </Suspense>
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default Page;