import Image from 'next/image';
import { Button } from '@workspace/ui/components/button';

export function HeroSection() {
  return (
    <section className="desktop:h-155 relative -mt-14 h-111.5">
      {/* 배경 이미지 + 오버레이 */}
      {/* 배경 이미지 + 오버레이 */}
      <picture>
        <source media="(min-width: 1024px)" srcSet="/images/hero-desktop.png" />
        <source media="(min-width: 744px)" srcSet="/images/hero-tablet.png" />
        <img
          src="/images/hero-mobile.png"
          alt="입주 하자 점검"
          className="tablet:object-center absolute inset-0 h-full w-full object-cover object-bottom"
        />
      </picture>
      <div className="absolute inset-0 bg-black/40" />

      {/* 콘텐츠 */}
      <div className="desktop:items-center relative flex h-full items-end justify-center px-8 pt-8 pb-8">
        <div className="tablet:w-82 flex w-full flex-col justify-end gap-6">
          <div className="tablet:gap-3 desktop:gap-4 flex flex-col gap-2">
            <h1 className="typo-display-lg whitespace-pre-line text-white">
              {'입주 하자 점검,\n왜 아직도 검색해서\n찾으시나요?'}
            </h1>
            <p className="typo-body-xl whitespace-pre-line text-white">
              {'카페와 단톡방 대신,\n입주도우미에서 바로 연결하세요.'}
            </p>
          </div>
          <Button className="tablet:h-14 tablet:px-10 tablet:text-[18px] tablet:leading-6 desktop:h-15 desktop:text-[20px] desktop:leading-6.5 h-12 self-start px-7">
            입주도우미 이용하기
          </Button>
        </div>
      </div>
    </section>
  );
}
