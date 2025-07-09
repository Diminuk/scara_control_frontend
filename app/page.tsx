import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-6 sm:p-20 bg-red-100 font-[family-name:var(--font-geist-sans)]">
      {/* Top Image */}
      <Image src="/acsg.png" alt="Top Image" width={500} height={200} />

      {/* Texts */}
      <h1 className="text-xl font-bold text-center">Manual mode</h1>
      <h2 className="text-lg text-center">Please use the physical buttons</h2>
      <h1 className="text-xl font-bold text-center">Selected connector:</h1>
      <h2 className="text-lg text-center">ID: 12898</h2>
      <Link href="/dashboard">
        <div className="bg-amber-400 rounded w-10 h-10">
        </div>
      </Link>

      {/* Connector Image */}
      <Image src="/connector.png" alt="Connector Image" width={200} height={200} />
    </div>
  );
}