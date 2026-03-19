import IconChatDots from '@workspace/ui/assets/icons/communication/chatDots.svg';
import IconChatCheck from '@workspace/ui/assets/icons/communication/chatCheck.svg';
import IconCalendarAdd from '@workspace/ui/assets/icons/basic/calendarAdd.svg';
import IconCalendarCheck from '@workspace/ui/assets/icons/basic/calendarCheck.svg';
import IconExpertcheck from '@workspace/ui/assets/icons/communication/fill_expertcheck2.svg';
import IconFolderProfile from '@workspace/ui/assets/icons/basic/folderProfile.svg';

const steps = [
  { icon: IconChatDots, title: '점검 요청', desc: '위치와 날짜 입력' },
  { icon: IconChatCheck, title: '전문가 수락', desc: '점검 가능 전문가 응답' },
  { icon: IconCalendarAdd, title: '일정 확정', desc: '일정 확정' },
  { icon: IconCalendarCheck, title: '예약 확정 및 결제', desc: '예약 확정 후 결제' },
  { icon: IconExpertcheck, title: '방문 점검', desc: '방문 점검' },
  { icon: IconFolderProfile, title: '점검 결과 확인', desc: '리포트 확인' },
];

export function ProcessSection() {
  return (
    <section className="tablet:px-6 tablet:py-20 desktop:px-8 desktop:py-30 bg-white px-4 py-10">
      <div className="desktop:mx-auto desktop:max-w-300">
        {/* 타이틀 영역 */}
        <div className="tablet:gap-4 desktop:gap-5 mb-8 flex flex-col items-center gap-3">
          <span className="typo-heading-h1 text-primary">입주 점검 진행 방식</span>
          <h2 className="typo-display-lg text-foreground text-center whitespace-pre-line">
            {'점검 요청부터\n리포트 확인까지'}
          </h2>
          <p className="typo-body-xl text-foreground text-center whitespace-pre-line">
            {
              '점검 위치와 날짜를 입력하면\n전문가에게 요청이 전달되고\n점검 결과를 리포트로 확인할 수 있습니다.'
            }
          </p>
        </div>

        {/* 타임라인 */}
        <div className="desktop:mx-auto desktop:max-w-184 rounded-2xl bg-[#FAFBFA] px-4 py-6">
          <div className="desktop:w-70 relative mx-auto flex w-58 flex-col gap-15">
            {/* 세로 점선 */}
            <div className="border-border absolute top-0 bottom-0 left-9.75 w-0 border-l border-dashed" />

            {steps.map((step, i) => (
              <div key={i} className="relative flex items-center gap-6">
                {/* 아이콘 */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white">
                  <step.icon width={38} height={38} />
                </div>

                {/* 텍스트 */}
                <div className="flex flex-col gap-2">
                  <span className="typo-heading-h3 text-[#1E1E1E]">{step.title}</span>
                  <span className="text-muted-foreground text-[15px] leading-6 font-normal">
                    {step.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
