import React, { useState } from 'react';

const PaginationButton = () => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className='flex justify-center mt-4'>
      <button
        className='w-[30px] h-[30px] text-sm mx-1 text-white bg-gray-400 border-solid border-[0.5px] rounded border-white'
        onClick={() => {
          pageNumber > 1 ? setPageNumber((prevNumber) => prevNumber - 1) : false;
        }}>
        <svg
          className='mx-auto'
          width='7'
          height='14'
          viewBox='0 0 8 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M2.828 6.99999L7.778 11.95L6.364 13.364L0 6.99999L6.364 0.635986L7.778 2.04999L2.828 6.99999Z'
            fill='white'
          />
        </svg>
      </button>
      <button className='w-[30px] h-[30px] text-sm mx-1 text-white bg-blue-1 border-solid border-[0.5px] rounded border-white'>
        {pageNumber}
      </button>
      <button
        className=' w-[30px] h-[30px] text-sm mx-1 text-white bg-gray-400 border-solid border-[0.5px] rounded border-white'
        onClick={() => setPageNumber((prevNumber) => prevNumber + 1)}>
        <svg
          className='mx-auto'
          width='7'
          height='14'
          viewBox='0 0 8 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M5.17168 6.99999L0.22168 2.04999L1.63568 0.635986L7.99968 6.99999L1.63568 13.364L0.22168 11.95L5.17168 6.99999Z'
            fill='white'
          />
        </svg>
      </button>
    </div>
  );
};

export default PaginationButton;
