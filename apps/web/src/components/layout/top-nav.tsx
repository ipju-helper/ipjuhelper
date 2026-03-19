import Link from 'next/link';
import Logo28 from '@workspace/ui/assets/logo/logo-28.svg';
import { Button } from '@workspace/ui/components/button';

export function TopNav() {
  return (
    <header className="tablet:h-16 tablet:px-5 desktop:h-18.5 desktop:px-6 flex h-14 items-center border-b border-[#E4E7EB] bg-white px-4">
      {/* 로고 */}
      <Link href="/" className="flex items-center">
        <Logo28 height={28} />
      </Link>

      {/* Nav */}
      <nav className="tablet:gap-8 desktop:gap-8 ml-auto flex items-center gap-4">
        {/* 모바일: 메뉴 */}
        <Button variant="text" size="text" className="tablet:hidden">
          메뉴
        </Button>

        {/* 태블릿/데스크톱: 텍스트 메뉴 */}
        <Button
          variant="text"
          size="text"
          className="tablet:inline-flex desktop:text-[20px] desktop:leading-6.5 hidden text-[18px] leading-6"
        >
          셀프 점검
        </Button>
        <Button
          variant="text"
          size="text"
          className="tablet:inline-flex desktop:text-[20px] desktop:leading-6.5 hidden text-[18px] leading-6"
        >
          전문가 참여
        </Button>

        {/* 로그인 버튼 */}
        <Button
          variant="secondary"
          className="tablet:h-11 tablet:px-10 tablet:text-[18px] tablet:leading-6 desktop:text-[20px] desktop:leading-6.5 h-10 px-7 text-[16px] leading-5.5"
        >
          로그인
        </Button>
      </nav>
    </header>
  );
}
