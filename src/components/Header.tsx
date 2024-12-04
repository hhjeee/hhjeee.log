import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed bg-white w-full py-[1.5rem] px-[5rem] shadow-md flex items-center justify-between">
      <Link href="/">
        <div className="text-xl font-bold text-gradient">hhjeee.log</div>
      </Link>
      <div>dark</div> {/* TODO icon 변경, 다크모드 기능 추가 */}
    </div>
  );
};

export default Header;
