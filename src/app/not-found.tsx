import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] place-content-center text-center">
      <h1 className="text-2xl mb-2 font-bold">Not Found</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <button className="mt-4 w-fit px-6 font-medium bg-primary rounded text-white py-2">
        <Link href="/">홈으로</Link>
      </button>
    </div>
  );
};
export default NotFound;
