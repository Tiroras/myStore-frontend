import { EnumProductSort } from '@/types/products.types';
import React from 'react';

interface IProps {
  sortType: EnumProductSort;
  changeSortType: (sortType: EnumProductSort) => void;
}

export const SortDropdown: React.FC<IProps> = ({
  sortType,
  changeSortType
}) => {
  const options = Object.keys(EnumProductSort) as Array<
    keyof typeof EnumProductSort
  >;
  return (
    <div>
      <select
        value={sortType}
        onChange={e => changeSortType(e.target.value as EnumProductSort)}
      >
        {options.map(key => (
          <option
            key={key}
            selected={sortType === EnumProductSort[key]}
            value={EnumProductSort[key]}
          >
            {EnumProductSort[key]}
          </option>
        ))}
      </select>
    </div>
  );
};
