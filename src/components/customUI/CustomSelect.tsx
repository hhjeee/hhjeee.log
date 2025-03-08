import { useState } from 'react';

import { ChevronDownIcon } from 'lucide-react';

interface CustomSelectProps {
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string | null) => void;
}

const CustomSelect = ({
  options,
  selectedOption,
  onSelect,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-2 px-4 bg-white flex justify-between text-gray3 font-gray-items-center"
      >
        <span className="font-medium">{selectedOption || '전체'}</span>
        <ChevronDownIcon className="text-gray2" />
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-white border rounded-md">
          <li
            onClick={() => {
              onSelect(null);
              setIsOpen(false);
            }}
            className="py-2 px-3 hover:bg-primary text-gray2 hover:bg-opacity-10 cursor-pointer"
          >
            전체
          </li>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className="py-2 px-3 hover:bg-primary text-gray2 hover:bg-opacity-10 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
