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
    <div className="flex space-x-4 mb-6 font-semibold">
        <button
        onClick={() => setSelectedCategory(null)}
        className={`px-4 py-2 rounded-full ${
            !selectedCategory ? "bg-[#000000] text-white" : "bg-[#FFFFFF]"
        }`}
        >
        All ({totalPostsCount})
        </button>
        {Object.entries(categoriesWithCount).map(([category, count]) => (
        <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
            selectedCategory === category ? "bg-[#000000] text-white" : "bg-[#FFFFFF]"
            }`}
        >
            {category} ({count})
        </button>
        ))}
    </div>
 )
}
export default CategoryBar;