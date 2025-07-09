import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

interface ActionCardProps {
  title: string;
  description: string;
  danger: number; // 0: none, 1: red, 2: orange
  impath: string;
}

// Helper to map danger levels to Tailwind classes
const dangerColorMap: Record<number, string> = {
  1: 'text-red-500',
  2: 'text-orange-500',
};

export default function ActionCard(props: ActionCardProps) {
  const dangerIconColor = dangerColorMap[props.danger];

  return (
    <div className="relative rounded-lg flex flex-col border-2 bg-gray-300 hover:bg-gray-500 p-4 min-h-[200px]">
      <div className="text-black text-xl text-center mb-2">{props.title}</div>

      <div className="flex justify-center mb-2">
        <Image height={50} width={50} src={props.impath} alt="icon" />
      </div>

      <div className="text-gray-800 mx-auto text-center w-1/2">
        {props.description}
      </div>

      {dangerIconColor && (
        <div className="absolute bottom-2 right-2">
          <ExclamationTriangleIcon height={25} width={25} className={dangerIconColor} />
        </div>
      )}
    </div>
  );
}
