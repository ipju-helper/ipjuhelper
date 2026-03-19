'use client';

import { useState } from 'react';
import { Button } from '@workspace/ui/components/button';
import { CheckButton } from '@workspace/ui/components/check-button';
import { QuickNavButton } from '@/components/quick-nav-button';
import IconSelfcheck from '@workspace/ui/assets/icons/communication/fill_selfcheck.svg';
import IconExpertcheck from '@workspace/ui/assets/icons/communication/fill_expertcheck.svg';

export function ControlsSection() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(true);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(true);

  return (
    <>
      {/* Primary */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Primary Button</h2>
        <p className="text-muted-foreground mb-4 text-sm">핵심 CTA 버튼</p>
        <div className="flex items-center gap-4">
          <Button className="h-10 w-31.75">확인</Button>
          <Button className="h-10 w-45.75">입주 도우미 이용하기</Button>
        </div>
      </div>

      {/* Secondary */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Secondary Button</h2>
        <p className="text-muted-foreground mb-4 text-sm">보조 액션 버튼</p>
        <div className="flex items-center gap-4">
          <Button variant="secondary" className="h-10 w-31.75">
            확인
          </Button>
          <Button variant="secondary" className="h-10 w-45.75">
            입주 도우미 이용하기
          </Button>
        </div>
      </div>

      {/* Overlay */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Overlay Button</h2>
        <p className="text-muted-foreground mb-4 text-sm">이미지/배경 위 버튼</p>
        <div className="flex items-center gap-4">
          <Button variant="overlay" size="overlay" className="w-31.75">
            확인
          </Button>
          <Button variant="overlay" size="overlay" className="w-45.75">
            무료로 이력서 만들기
          </Button>
        </div>
      </div>

      {/* Text */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Text Button</h2>
        <p className="text-muted-foreground mb-4 text-sm">텍스트 링크 스타일 버튼</p>
        <div className="flex items-center gap-4">
          <Button variant="text" size="text">
            셀프 점검
          </Button>
          <Button variant="text" size="text">
            전문가 참여
          </Button>
        </div>
      </div>

      {/* Check - Circle */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Check Button (Circle)</h2>
        <p className="text-muted-foreground mb-4 text-sm">원형 체크 버튼</p>
        <div className="flex items-center gap-4">
          <CheckButton variant="circle" checked={check1} onChange={setCheck1} label="라벨" />
          <CheckButton variant="circle" checked={check3} onChange={setCheck3} label="체크됨" />
          <CheckButton variant="circle" disabled label="비활성" />
          <CheckButton variant="circle" checked={check2} onChange={setCheck2} />
        </div>
      </div>

      {/* Check - Plain */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Check Button (Plain)</h2>
        <p className="text-muted-foreground mb-4 text-sm">체크 아이콘만</p>
        <div className="flex items-center gap-4">
          <CheckButton variant="plain" checked={check4} onChange={setCheck4} label="라벨" />
          <CheckButton variant="plain" checked={check5} onChange={setCheck5} label="체크됨" />
          <CheckButton variant="plain" disabled label="비활성" />
          <CheckButton variant="plain" checked={false} />
        </div>
      </div>

      {/* Quick Nav - Vertical */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Quick Nav Button (Vertical)</h2>
        <p className="text-muted-foreground mb-4 text-sm">홈 퀵내비 세로형</p>
        <div className="flex items-center gap-4 rounded-2xl bg-[#1F6FEB] p-4">
          <QuickNavButton
            direction="vertical"
            icon={<IconSelfcheck width={24} height={24} />}
            label="셀프 점검"
          />
          <QuickNavButton
            direction="vertical"
            icon={<IconExpertcheck width={24} height={24} />}
            label="전문가 점검"
          />
        </div>
      </div>

      {/* Quick Nav - Horizontal */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Quick Nav Button (Horizontal)</h2>
        <p className="text-muted-foreground mb-4 text-sm">홈 퀵내비 가로형</p>
        <div className="flex items-center gap-4 rounded-2xl bg-[#1F6FEB] p-4">
          <QuickNavButton
            direction="horizontal"
            icon={<IconExpertcheck width={24} height={24} />}
            label="전문가 점검"
          />
          <QuickNavButton
            direction="horizontal"
            icon={<IconSelfcheck width={24} height={24} />}
            label="셀프 점검"
          />
        </div>
      </div>
    </>
  );
}
