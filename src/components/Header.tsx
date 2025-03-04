import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed bg-white w-full h-[3.5rem] z-10 px-[5rem] border-b-2 border-[#f2f4f6] flex items-center justify-between">
      <Link href="/">
        <div className="text-lg font-semibold">
          <span className="text-primary2">✪</span> hhjeee.log
        </div>
      </Link>
      <Link href="https://github.com/hhjeee">
        <Image
          src="/icons/github.svg"
          alt="GitHub Icon"
          width="24"
          height="24"
        />
      </Link>
    </div>
  );
};

export default Header;
