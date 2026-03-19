import { SectionCard } from '@/components/section-card';
import IconSelfcheck from '@workspace/ui/assets/icons/communication/fill_selfcheck.svg';
import IconReportcheck from '@workspace/ui/assets/icons/communication/fill_reportcheck.svg';
import IconExpertcheck from '@workspace/ui/assets/icons/communication/fill_expertcheck.svg';

export function ServiceSection() {
  return (
    <section className="tablet:px-6 tablet:py-20 desktop:px-8 desktop:py-30 bg-white px-4 py-10">
      <div className="desktop:mx-auto desktop:max-w-300">
        {/* 타이틀 영역 */}
        <div className="tablet:gap-4 desktop:gap-5 mb-8 flex flex-col items-center gap-3">
          <span className="typo-heading-h1 text-primary">점검 방법 선택</span>
          <h2 className="typo-display-lg text-center whitespace-pre-line text-[#1E1E1E]">
            {'상황에 맞게\n점검을 시작하세요.'}
          </h2>
          <p className="typo-body-xl text-foreground text-center whitespace-pre-line">
            {'셀프 점검부터 전문가 방문 점검까지\n원하는 방식으로 진행할 수 있습니다.'}
          </p>
        </div>

        {/* 카드 영역 */}
        <div className="flex flex-col items-center gap-3">
          <SectionCard
            tag="SELF"
            title="셀프 점검 시작"
            description={'체크리스트를 따라\n입주 하자를 빠르게 기록하세요.'}
            icon={
              <div className="flex h-12 w-12 items-center justify-center">
                <IconSelfcheck width={48} height={48} />
              </div>
            }
          />
          <SectionCard
            tag="REVIEW"
            title="전문가 확인 요청"
            description={'직접 작성한 점검 내용을\n전문가가 확인하고 보완합니다.'}
            icon={
              <div className="flex h-12 w-12 items-center justify-center">
                <IconReportcheck width={48} height={48} />
              </div>
            }
          />
          <SectionCard
            tag="VISIT"
            title="전문가 점검 요청"
            description={'전문가가 직접 방문해\n점검을 진행합니다.'}
            icon={
              <div className="flex h-12 w-12 items-center justify-center">
                <IconExpertcheck width={48} height={48} />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
