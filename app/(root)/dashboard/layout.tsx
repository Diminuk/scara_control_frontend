// app/dashboard/layout.tsx
import Link from 'next/link';
import Image from "next/image";
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-300 text-black p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/acsg.png" alt="Top Image" width={120} height={60} />
          </div>
          {/* Navigation */}
          <nav className="flex space-x-4">
            {/*

             <Link href="/dashboard" className="hover:underline text-lg font-bold">
              Dashboard
            </Link>
           */}
            <Link href="/dashboard/manual" className="hover:underline text-lg font-bold">
              Manual
            </Link>
            <Link href="/dashboard/process" className="hover:underline text-lg font-bold">
              Process
            </Link>
            {/*
            <Link href="/dashboard/statistics" className="hover:underline text-lg font-bold">
              Statistics
            </Link>
            */}
            {/*
            <Link href="/dashboard/configuration" className="hover:underline text-lg font-bold">
              Configuration
            </Link>
            */}
          </nav>
          {/*
          <div className='flex'>
            <Link href="/dashboard/help" className="hover:underline">
              <QuestionMarkCircleIcon className='size-5 ' />
            </Link>
          </div>
          */}
        </div>
      </header>

      <main className="flex flex-1 p-4 bg-gray-100">{children}</main>
    </div>
  );
}
