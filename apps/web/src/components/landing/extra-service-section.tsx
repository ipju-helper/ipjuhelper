import Image from 'next/image';
import { Button } from '@workspace/ui/components/button';

export function ExtraServiceSection() {
  return (
    <section className="tablet:px-6 tablet:py-20 desktop:px-8 desktop:py-30 bg-white px-4 py-10">
      <div className="desktop:mx-auto desktop:max-w-300">
        {/* 타이틀 영역 */}
        <div className="tablet:gap-4 desktop:gap-5 mb-6 flex flex-col items-center gap-3">
          <span className="typo-heading-h1 text-primary">입주 준비 서비스</span>
          <h2 className="typo-display-lg text-center whitespace-pre-line text-[#1E1E1E]">
            {'점검 이후 필요한 서비스까지\n입주도우미에서'}
          </h2>
          <p className="typo-body-xl text-foreground text-center whitespace-pre-line">
            {'하자 점검 이후 필요한\n줄눈, 입주 청소 등의 서비스도\n순차적으로 확장될 예정입니다.'}
          </p>
        </div>

        {/* 카드 영역 */}
        <div className="mb-6 flex flex-col gap-4.5">
          {/* 줄눈 시공 - 큰 카드 */}
          <div className="flex flex-col gap-3">
            <div className="tablet:h-88.5 desktop:h-152.5 h-45 overflow-hidden rounded-[20px]">
              <Image
                src="/images/service-grout.jpg"
                alt="줄눈 시공"
                width={354}
                height={180}
                className="h-full w-full object-cover object-[center_70%]"
              />
            </div>
            <div>
              <p className="typo-heading-h3 text-[#1E1E1E]">줄눈 시공</p>
              <p className="text-muted-foreground text-[14px] leading-5.5 font-normal">
                욕실과 주방 줄눈을 깔끔하게 정리합니다.
              </p>
            </div>
          </div>

          {/* 입주 청소 + 탄성 코트 - 작은 카드 2개 */}
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-3">
              <div className="tablet:h-56.75 desktop:h-98.5 h-28.25 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/service-cleaning.jpg"
                  alt="입주 청소"
                  width={169}
                  height={113}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="typo-heading-h3 text-[#1E1E1E]">입주 청소</p>
                <p className="text-muted-foreground text-[14px] leading-5.5 font-normal whitespace-pre-line">
                  {'입주 전 필요한\n전문 청소 서비스'}
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <div className="tablet:h-56.75 desktop:h-98.5 h-28.25 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/service-coating.jpg"
                  alt="탄성 코트"
                  width={169}
                  height={113}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="typo-heading-h3 text-[#333333]">탄성 코트</p>
                <p className="text-muted-foreground text-[14px] leading-5.5 font-normal whitespace-pre-line">
                  {'곰팡이 방지와 단열을 위한\n탄성 코트 시공'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 CTA */}
        <div className="flex flex-col items-center gap-6">
          <p className="typo-body-xl text-foreground text-center">
            관련 전문가도 함께 모집하고 있습니다.
          </p>
          <Button className="tablet:h-14 tablet:px-10 tablet:text-[18px] tablet:leading-6 desktop:h-15 desktop:text-[20px] desktop:leading-6.5 h-12 px-7">
            전문가로 참여하기
          </Button>
        </div>
      </div>
    </section>
  );
}
