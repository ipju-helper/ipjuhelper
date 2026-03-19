import { StepCard } from '@/components/step-card';

export function ProblemSection() {
  return (
    <section className="bg-white px-4 py-10">
      <div className="mx-auto w-[354px]">
        {/* 타이틀 영역 */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <span className="typo-heading-h1 text-[#1F6FEB]">아직도 이렇게 하시나요?</span>
          <h2 className="typo-display-lg text-center whitespace-pre-line text-[#1E1E1E]">
            {'입주 하자 점검,\n왜 이렇게 복잡할까요?'}
          </h2>
          <p className="typo-body-xl text-center text-[#1F2933]">
            정보는 흩어져 있고 기록은 연결되지 않습니다.
          </p>
        </div>

        {/* 카드 2×2 그리드 */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <StepCard
              title={'카페 검색 및\n게시글 작성'}
              image="/images/problem01.png"
              bgColor="#B5D5FB"
              overlayColor="rgba(46, 58, 69, 0.6)"
              className="flex-1"
            />
            <StepCard
              title={'댓글로 업체\n추천 받기'}
              image="/images/problem02.png"
              overlayColor="rgba(46, 58, 69, 0.6)"
              className="flex-1"
            />
          </div>
          <div className="flex gap-3">
            <StepCard
              title={'계좌 입금 후\n일정 조율'}
              image="/images/problem03.png"
              className="flex-1"
            />
            <StepCard
              title={'점검 기록 메일 및\n카톡 파일로 전달'}
              image="/images/problem04.png"
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
