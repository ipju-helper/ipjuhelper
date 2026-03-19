import { StepCard } from '@/components/step-card';
import { SectionCard } from '@/components/section-card';
import IconSelfcheck from '@workspace/ui/assets/icons/communication/fill_selfcheck.svg';
import IconExpertcheck from '@workspace/ui/assets/icons/communication/fill_expertcheck.svg';
import IconReportcheck from '@workspace/ui/assets/icons/communication/fill_reportcheck.svg';

export function SurfacesSection() {
  return (
    <>
      {/* Section Card (기본 카드) */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Section Card</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          서비스 소개 카드 (태그 + 제목 + 설명 + 아이콘)
        </p>
        <div className="flex flex-col gap-4">
          <SectionCard
            tag="SELF"
            title="직접 점검하기"
            description={'체크리스트를 따라\n입주 하자를 빠르게 기록하세요.'}
            icon={<IconSelfcheck width={48} height={48} />}
          />
          <SectionCard
            tag="REVIEW"
            title="전문가 의견 받기"
            description={'직접 작성한 점검 내용을\n전문가가 확인하고 보완합니다.'}
            icon={<IconReportcheck width={48} height={48} />}
          />
          <SectionCard
            tag="VISIT"
            title="전문가 방문 점검"
            description={'전문가가 직접 방문해\n점검을 진행합니다.'}
            icon={<IconExpertcheck width={48} height={48} />}
          />
        </div>
      </div>

      {/* Step Card */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Step Card</h2>
        <p className="text-muted-foreground mb-4 text-sm">단계별 프로세스 카드</p>
        <div className="flex items-center gap-4">
          <StepCard
            title={'카페 검색 및\n게시글 작성'}
            image="/images/problem01.png"
            bgColor="#B5D5FB"
            overlayColor="rgba(46, 58, 69, 0.6)"
          />
          <StepCard
            title="댓글로 업체 추천 받기"
            image="/images/problem02.png"
            overlayColor="rgba(46, 58, 69, 0.6)"
          />
          <StepCard title="계좌 입금 후 일정 조율" image="/images/problem03.png" />
          <StepCard title="점검 기록 메일 및 카톡 파일로 전달" image="/images/problem04.png" />
        </div>
      </div>
    </>
  );
}
