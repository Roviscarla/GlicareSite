import React from "react";

type FilterButtonProps = {
  label: string;
  onClick: () => void;
  isActive: boolean;
};

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  onClick,
  isActive,
}) => {
  const baseClasses =
    "px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  const activeClasses = "bg-dark-blue text-white shadow-md";
  const inactiveClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300";

  const buttonClasses = `${baseClasses} ${
    isActive ? activeClasses : inactiveClasses
  }`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};

export default FilterButton;
