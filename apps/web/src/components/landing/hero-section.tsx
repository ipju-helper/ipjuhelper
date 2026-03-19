import Image from 'next/image';
import { Button } from '@workspace/ui/components/button';

export function HeroSection() {
  return (
    <section className="relative -mt-14 h-111.5">
      {/* 배경 이미지 + 오버레이 */}
      <Image
        src="/images/hero.jpg"
        alt="입주 하자 점검"
        fill
        className="object-cover object-bottom"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* 콘텐츠 */}
      <div className="relative flex h-full items-end px-8 pb-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="typo-display-lg whitespace-pre-line text-white">
              {'입주 하자 점검,\n왜 아직도 검색해서\n찾으시나요?'}
            </h1>
            <p className="typo-body-xl whitespace-pre-line text-white">
              {'카페와 단톡방 대신,\n입주도우미에서 바로 연결하세요.'}
            </p>
          </div>
          <Button className="h-12 px-7">입주도우미 이용하기</Button>
        </div>
      </div>
    </section>
  );
}
