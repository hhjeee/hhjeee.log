import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed bg-white w-full h-[4rem] z-10 px-[5rem] border-b-2 border-[#f2f4f6] flex items-center justify-between">
      <Link href="/">
        <div className="text-xl font-semibold text-gradient">hhjeee.log</div>
      </Link>
      {/* <div>dark</div> TODO 다크모드 기능 추가 */}
    </div>
  );
};

export default Header;
