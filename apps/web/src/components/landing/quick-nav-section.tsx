import { QuickNavButton } from '@/components/quick-nav-button';
import IconSelfcheck from '@workspace/ui/assets/icons/communication/fill_selfcheck.svg';
import IconExpertcheck from '@workspace/ui/assets/icons/communication/fill_expertcheck.svg';

export function QuickNavSection() {
  return (
    <section className="bg-white px-4 pt-8">
      <div className="mx-auto w-88.5 rounded-[20px] bg-[#1F6FEB] px-4 py-2">
        <div className="flex">
          <QuickNavButton
            direction="vertical"
            icon={<IconSelfcheck width={24} height={24} />}
            label="셀프 점검"
            className="flex-1"
          />
          <QuickNavButton
            direction="vertical"
            icon={<IconExpertcheck width={24} height={24} />}
            label="전문가 점검"
            className="flex-1"
          />
        </div>
      </div>
    </section>
  );
}
