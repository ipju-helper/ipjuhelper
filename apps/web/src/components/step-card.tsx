import Image from 'next/image';
import { cn } from '@workspace/ui/lib/utils';

interface StepCardProps {
  title: string;
  image: string;
  bgColor?: string;
  overlayColor?: string;
  className?: string;
}

export function StepCard({
  title,
  image,
  bgColor = '#F5F6F8',
  overlayColor = 'rgba(37, 37, 37, 0.6)',
  className,
}: StepCardProps) {
  return (
    <div
      className={cn('relative h-43 w-[170.5px] overflow-hidden rounded-[20px]', className)}
      style={{ backgroundColor: bgColor }}
    >
      {/* 이미지 */}
      <div className="flex justify-center px-2.5 pt-1">
        <Image src={image} alt={title} width={110} height={110} />
      </div>

      {/* 텍스트 오버레이 */}
      <div
        className="absolute inset-x-0 bottom-0 flex h-17 items-center justify-center rounded-b-[20px] px-4 py-3 backdrop-blur-sm"
        style={{ backgroundColor: overlayColor }}
      >
        <p className="text-center font-sans text-[16px] leading-5.5 font-semibold tracking-[-0.2px] whitespace-pre-line text-white">
          {title}
        </p>
      </div>
    </div>
  );
}
