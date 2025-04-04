'use client';

import { useRouter } from 'next/navigation';

import useMediaQuery from '@/hooks/useMediaQuery';

import CustomSelect from '../customUI/CustomSelect';
import CustomTab from '../customUI/CustomTab';

const CategoryBar = ({
  categories,
  selectedCategory,
}: {
  categories: string[];
  selectedCategory: string | null;
}) => {
  const router = useRouter();
  const isBelowSM = useMediaQuery(640);

  const handleCategoryClick = (category: string | null) => {
    router.push(category ? `/${decodeURIComponent(category)}` : '/');
  };

  return (
    <div className="z-10 w-full bg-white border-b-2 border-gray1">
      {isBelowSM ? (
        <CustomSelect
          options={categories}
          selectedOption={selectedCategory}
          onSelect={handleCategoryClick}
        />
      ) : (
        <CustomTab
          tabs={categories}
          selectedTab={selectedCategory}
          onClick={handleCategoryClick}
        />
      )}
    </div>
  );
};

export default CategoryBar;
