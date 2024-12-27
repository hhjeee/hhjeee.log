interface CategoryBarProps {
  categoriesWithCount: Record<string, number>;
  totalPostsCount: number;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const CategoryBar = ({
  categoriesWithCount,
  totalPostsCount,
  selectedCategory,
  setSelectedCategory,
}: CategoryBarProps) => {
  return (
    <div className="fixed bg-[#FFF] z-10 pt-[1rem] mb-[1rem] left-1/2 transform -translate-x-1/2 w-[65%] flex space-x-4 border-b-2 border-[#f2f4f6]">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`py-2 px-4 ${
          !selectedCategory
            ? 'text-darkGray font-semibold border-b-2 border-darkGray'
            : 'text-lightGray'
        }`}
      >
        <span className="hover:font-semibold">전체 ({totalPostsCount})</span>
      </button>
      {Object.entries(categoriesWithCount).map(([category, count]) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`py-2 px-4 hover:font-semibold ${
            selectedCategory === category
              ? 'text-darkGray font-semibold border-b-2 border-darkGray'
              : 'text-lightGray'
          }`}
        >
          {category} ({count})
        </button>
      ))}
    </div>
  );
};
export default CategoryBar;
