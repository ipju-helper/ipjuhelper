import Image from 'next/image';
import { Button } from '@workspace/ui/components/button';

export function ExtraServiceSection() {
  return (
    <section className="bg-white px-4 py-10">
      <div className="mx-auto w-88.5">
        {/* 타이틀 영역 */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <span className="typo-heading-h1 text-[#1F6FEB]">입주 준비 서비스</span>
          <h2 className="typo-display-lg text-center whitespace-pre-line text-[#1E1E1E]">
            {'점검 이후 필요한 서비스까지\n입주도우미에서'}
          </h2>
          <p className="typo-body-xl text-center whitespace-pre-line text-[#1F2933]">
            {'하자 점검 이후 필요한\n줄눈, 입주 청소 등의 서비스도\n순차적으로 확장될 예정입니다.'}
          </p>
        </div>

        {/* 카드 영역 */}
        <div className="mb-6 flex flex-col gap-4.5">
          {/* 줄눈 시공 - 큰 카드 */}
          <div className="flex flex-col gap-3">
            <div className="h-45 overflow-hidden rounded-[20px]">
              <Image
                src="/images/service-grout.jpg"
                alt="줄눈 시공"
                width={354}
                height={180}
                className="h-full w-full object-cover object-[center_70%]"
              />
            </div>
            <div>
              <p className="text-[16px] leading-5.5 font-semibold tracking-[-0.2px] text-[#1E1E1E]">
                줄눈 시공
              </p>
              <p className="text-[14px] leading-5.5 font-normal text-[#7B8794]">
                욕실과 주방 줄눈을 깔끔하게 정리합니다.
              </p>
            </div>
          </div>

          {/* 입주 청소 + 탄성 코트 - 작은 카드 2개 */}
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-3">
              <div className="h-28.25 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/service-cleaning.jpg"
                  alt="입주 청소"
                  width={169}
                  height={113}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[16px] leading-5.5 font-semibold tracking-[-0.2px] text-[#1E1E1E]">
                  입주 청소
                </p>
                <p className="text-[14px] leading-5.5 font-normal text-[#7B8794]">
                  입주 전 필요한 전문 청소 서비스
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <div className="h-28.25 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/service-coating.jpg"
                  alt="탄성 코트"
                  width={169}
                  height={113}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[16px] leading-5.5 font-semibold tracking-[-0.2px] text-[#333333]">
                  탄성 코트
                </p>
                <p className="text-[14px] leading-5.5 font-normal whitespace-pre-line text-[#7B8794]">
                  {'곰팡이 방지와 단열을 위한\n탄성 코트 시공'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 CTA */}
        <div className="flex flex-col items-center gap-6">
          <p className="typo-body-xl text-center text-[#1F2933]">
            관련 전문가도 함께 모집하고 있습니다.
          </p>
          <Button className="h-12 px-7">전문가로 참여하기</Button>
        </div>
      </div>
    </section>
  );
}
