import { createContext, useState } from 'react';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
    const [filter, setFilters] = useState({ category: 'all', price: 0 });
    return (
        <FilterContext.Provider value={{ filter, setFilters }}>
            {' '}
            {children}{' '}
        </FilterContext.Provider>
    );
}
