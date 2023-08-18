import React from 'react';

function Filter({ category, onCategoryChange }) {
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className="Filter">
      <label>Filter by category:</label>
      <select value={category} onChange={handleCategoryChange}>
        {/* options for your categories */}
      </select>
    </div>
  );
}

export default Filter;
