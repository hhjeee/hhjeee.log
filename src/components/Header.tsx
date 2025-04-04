import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-white w-full py-6 z-10 flex justify-between items-center">
      <Link href="/">
        <div className="text-xl font-medium ">
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
