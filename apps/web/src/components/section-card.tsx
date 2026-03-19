'use client';

import * as React from 'react';
import { cn } from '@workspace/ui/lib/utils';
import IconChevronRight from '@workspace/ui/assets/icons/arrow/chevronright.svg';

interface SectionCardProps {
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function SectionCard({
  tag,
  title,
  description,
  icon,
  onClick,
  className,
}: SectionCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex h-40 w-82 cursor-pointer items-center rounded-2xl border border-[#E4E7EB] bg-white p-6 transition-all hover:border-[#1F6FEB] hover:shadow-[0px_2px_13px_rgba(96,85,162,0.16)]',
        className,
      )}
    >
      {/* 텍스트 영역 */}
      <div className="flex flex-1 flex-col gap-2">
        {/* 태그 */}
        <span className="inline-flex w-fit items-center rounded-[10px] bg-[#DBEDFE] px-2.5 py-0.5 text-[14px] leading-5 font-medium tracking-[0.2px] text-[#1F6FEB]">
          {tag}
        </span>

        {/* 제목 + 화살표 */}
        <div className="flex items-center gap-1">
          <span className="text-[20px] leading-6.5 font-semibold tracking-[-0.2px] text-[#1E1E1E]">
            {title}
          </span>
          <IconChevronRight width={24} height={24} />
        </div>

        {/* 설명 */}
        <p className="text-[14px] leading-5.5 font-normal whitespace-pre-line text-[#787878]">
          {description}
        </p>
      </div>

      {/* 썸네일 */}
      <div className="flex h-22 w-22 items-center justify-center rounded-2xl bg-[#F5F7F6]">
        {icon}
      </div>
    </div>
  );
}
