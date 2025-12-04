import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

// const items = Array.from({ length: 42 }, (_, i) => `Élément ${i + 1}`);

const PaginationCNG = ({items,itemsPerPage,setCurrentPage,currentItems,currentPage}) => {
//   const itemsPerPage = 6;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="max-w-md mx-auto font-sans">
      {/* <h2 className="text-xl font-bold mb-4">Liste paginée</h2>

      <ul className="space-y-2 mb-6">
        {currentItems.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 bg-gray-100 rounded shadow-sm hover:bg-gray-200 transition"
          >
            {item}
          </li>
        ))}
      </ul> */}

      <div className="flex justify-center items-center space-x-1">
        <button
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-3 py-1 text-sm rounded ${
              page === currentPage
                ? 'bg-primary text-white font-semibold'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PaginationCNG;
