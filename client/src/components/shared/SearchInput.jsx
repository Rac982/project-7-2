import React from 'react'

const SearchInput = ({ value, onChange }) => {
    return (
      <div className="relative w-full">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Cerca i tuoi piatti preferiti"
          className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 text-sm text-text placeholder:text-muted"
        />
  
        {/* Icona Font Awesome */}
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-muted text-base"></i>
      </div>
    );
  };
  
  export default SearchInput;