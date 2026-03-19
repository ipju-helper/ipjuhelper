import Image from 'next/image';
import { Button } from '@workspace/ui/components/button';

export function CtaSection() {
  return (
    <section className="desktop:h-120 relative h-75">
      {/* 배경 이미지 + 오버레이 */}
      <Image src="/images/cta-banner.jpg" alt="점검 요청" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/20" />

      {/* 콘텐츠 */}
      <div className="tablet:px-6 desktop:px-8 relative flex h-full items-center justify-center px-4">
        <div className="flex flex-col items-center gap-6">
          <h2 className="typo-display-lg text-center text-white">지금 점검을 요청해보세요</h2>
          <p className="typo-heading-h3 text-muted text-center whitespace-pre-line">
            {'점검 위치와 날짜를 입력하면\n전문가에게 요청이 전달됩니다.'}
          </p>
          <Button
            variant="overlay"
            size="overlay"
            className="tablet:h-14 tablet:px-10 tablet:text-[18px] tablet:leading-6 desktop:h-15 desktop:text-[20px] desktop:leading-6.5"
          >
            점검 요청하기
          </Button>
        </div>
      </div>
    </section>
  );
}
