'use client';

import { useRouter } from 'next/navigation';

interface CategoryBarProps {
  categoriesWithCount: Record<string, number>;
  totalPostsCount: number;
  selectedCategory: string | null;
}

const CategoryBar = ({
  categoriesWithCount,
  totalPostsCount,
  selectedCategory,
}: CategoryBarProps) => {
  const router = useRouter();

  const handleCategoryClick = (category: string | null) => {
    if (category === null) {
      router.push('/');
    } else {
      router.push(`/${decodeURIComponent(category)}`);
    }
  };

  return (
    <div className="fixed bg-[#FFF] z-10 pt-[1rem] mb-[1rem] left-1/2 transform -translate-x-1/2 w-[65%] flex space-x-4 border-b-2 border-gray1">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`py-2 px-4 ${
          !selectedCategory
            ? 'text-gray3 font-semibold border-b-2 border-gray3'
            : 'text-gray2'
        }`}
      >
        <span className="hover:font-semibold">전체 ({totalPostsCount})</span>
      </button>
      {Object.entries(categoriesWithCount).map(([category, count]) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`py-2 px-4 hover:font-semibold ${
            selectedCategory === category
              ? 'text-gray3 font-semibold border-b-2 border-gray3'
              : 'text-gray2'
          }`}
        >
          {category} ({count})
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
