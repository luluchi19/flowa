import prisma from '@/lib/db';

const Page = async () => {
  const users = await prisma.user.findMany();
  return (
    <div>
      <h1 className="text-3xl">Welcome to the Page</h1>
      <p>This is a sample page component.</p>
      <div className='min-h-screen min-w-screen flex items-center justify-center'>
        {JSON.stringify(users)}
      </div>
    </div>
  );
};

export default Page;