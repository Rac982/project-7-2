import React, { useState } from 'react'
import Toast from '../../components/shared/Toast'
import { useApi } from '../../hooks/useApi'
import { config } from '../../config';
import { useDispatch } from 'react-redux';
import { setSearchResult } from '../../store/slices/searchSlice';
import { useToast } from '../../hooks/useToast';

const SearchInput = ({ value, onChange, categories }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const {get} = useApi();

  const handleSearch = async () => {
    const query = value.trim().toLowerCase();

    try {
      const payload = await get(`/search?u=${config.BUSINESS_ID}&q=${query}`);
      const _payload = { products: [], categories: [], ...payload };
      dispatch(setSearchResult(_payload));
    } catch (error) {
      console.log(error);
      toast.error("Nessun prodotto corrisponde alla ricerca.");
    }
  }

  const isActive = value.trim().length > 0

  return (
    <div className="relative w-full">
      <input
        type="search"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            handleSearch()
          }
        }}
        placeholder="Cerca tra i piatti disponibili"
        className="w-full bg-white pl-4 pr-11 py-3 rounded-full border border-gray-300 text-xs placeholder:text-muted text-text"
      />

      <button
        onClick={handleSearch}
        disabled={!isActive}
        className={`absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-opacity ${isActive ? 'text-primary opacity-100 cursor-pointer' : 'text-muted opacity-50 cursor-default'
          }`}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  )
}

export default SearchInput