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
        'border-border hover:border-primary tablet:w-full flex h-40 w-82 cursor-pointer items-center rounded-2xl border bg-white p-6 transition-all hover:shadow-[0px_2px_13px_rgba(96,85,162,0.16)]',
        className,
      )}
    >
      {/* 텍스트 영역 */}
      <div className="flex flex-1 flex-col gap-2">
        {/* 태그 */}
        <span className="typo-label-xl text-primary inline-flex w-fit items-center rounded-[10px] bg-[#DBEDFE] px-2.5 py-0.5">
          {tag}
        </span>

        {/* 제목 + 화살표 */}
        <div className="flex items-center gap-1">
          <span className="typo-heading-h1 text-foreground">{title}</span>
          <IconChevronRight width={24} height={24} />
        </div>

        {/* 설명 */}
        <p className="text-[14px] leading-5.5 font-normal whitespace-pre-line text-[#787878]">
          {description}
        </p>
      </div>

      {/* 썸네일 */}
      <div className="bg-muted flex h-22 w-22 items-center justify-center rounded-2xl">{icon}</div>
    </div>
  );
}
