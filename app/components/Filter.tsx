import React, { useState } from 'react';

interface SearchFilterProps {
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  searchTerm: string;
  category: string;
}

const SearchFilterComponent: React.FC<SearchFilterProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = () => {
    const filters: Filters = { searchTerm, category: selectedCategory };
    onFilterChange(filters);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const filters: Filters = { searchTerm, category };
    onFilterChange(filters);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">All Categories</option>
        {/* Populate with your category options */}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilterComponent;
