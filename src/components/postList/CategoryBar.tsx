'use client';

import { useRouter } from 'next/navigation';

const CategoryBar = ({
  categories,
  selectedCategory,
}: {
  categories: string[];
  selectedCategory: string | null;
}) => {
  const router = useRouter();

  const handleCategoryClick = (category: string | null) => {
    if (category === null) {
      router.push('/');
    } else {
      router.push(`/${decodeURIComponent(category)}`);
    }
  };

  return (
    <div className="fixed bg-[#FFF] z-10 pt-2 left-1/2 transform -translate-x-1/2 w-[65%] flex space-x-2 border-b-2 border-gray1">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`py-2 px-4 text-sm ${
          !selectedCategory
            ? 'text-white font-medium bg-primary rounded-t-md'
            : 'text-gray2'
        }`}
      >
        <span>전체 </span>
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`py-2 px-4 text-sm ${
            selectedCategory === category
              ? 'text-white font-medium bg-primary rounded-t-md'
              : 'text-gray2'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
