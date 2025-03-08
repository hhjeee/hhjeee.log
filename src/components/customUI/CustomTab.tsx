interface CustomTabProps {
  tabs: string[];
  selectedTab: string | null;
  onClick: (tab: string | null) => void;
}

const CustomTab = ({ tabs, selectedTab, onClick }: CustomTabProps) => {
  return (
    <div className="space-x-1 flex">
      <button
        onClick={() => onClick(null)}
        className={`py-2 px-4 text-sm cursor-pointer whitespace-nowrap rounded-t-md ${
          !selectedTab
            ? 'text-white font-medium bg-primary'
            : 'text-gray2 hover:bg-gray1'
        }`}
      >
        <span>전체 </span>
      </button>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onClick(tab)}
          className={`py-2 px-4 text-sm cursor-pointer whitespace-nowrap rounded-t-md ${
            selectedTab === tab
              ? 'text-white font-medium bg-primary'
              : 'text-gray2 hover:bg-gray1'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default CustomTab;
