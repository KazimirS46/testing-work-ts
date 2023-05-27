import { createContext } from 'react';

interface ISearchContext {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

interface ISortContext {
  direction: string;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
  setProp: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<Partial<ISearchContext>>({});

export const SortContext = createContext<Partial<ISortContext>>({});
