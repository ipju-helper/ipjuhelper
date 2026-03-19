import { QuickNavButton } from '@/components/quick-nav-button';
import IconSelfcheck from '@workspace/ui/assets/icons/communication/fill_selfcheck.svg';
import IconExpertcheck from '@workspace/ui/assets/icons/communication/fill_expertcheck.svg';

export function QuickNavSection() {
  return (
    <section className="tablet:px-6 desktop:px-8 bg-white px-4 pt-8">
      <div className="bg-primary desktop:mx-auto desktop:max-w-300 rounded-[20px] px-4 py-2">
        <div className="flex">
          <QuickNavButton
            direction="vertical"
            icon={<IconSelfcheck width={24} height={24} />}
            label="직접 점검하기"
            className="tablet:hidden flex-1"
          />
          <QuickNavButton
            direction="vertical"
            icon={<IconExpertcheck width={24} height={24} />}
            label="전문가 점검 요청"
            className="tablet:hidden flex-1"
          />
          <QuickNavButton
            direction="horizontal"
            icon={<IconSelfcheck width={32} height={32} />}
            label="직접 점검하기"
            className="tablet:flex hidden flex-1"
          />
          <QuickNavButton
            direction="horizontal"
            icon={<IconExpertcheck width={32} height={32} />}
            label="전문가 점검 요청"
            className="tablet:flex hidden flex-1"
          />
        </div>
      </div>
    </section>
  );
}
