import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col flex-1">
      <div>
        <Link href={"/dashboard/manual"}>
          <ArrowLeftCircleIcon height={60} width={60} className='text-gray-700'/>
        </Link>
      </div>

      <div>{children}</div>
    </div>
  );
}
