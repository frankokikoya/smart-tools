import React from 'react'

const SwatchIcon = ({ isSelected = false, ...props }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        width='1.5em'
        height='1.5em'
        fill='none'
        {...props}
    >
        <path
            d='M9.33333 28C6.38781 28 4 25.6121 4 22.6667V6.66667C4 5.19391 5.19391 4 6.66667 4H12C13.4728 4 14.6667 5.19391 14.6667 6.66667V22.6667C14.6667 25.6121 12.2789 28 9.33333 28ZM9.33333 28H25.3333C26.8061 28 28 26.8061 28 25.3333V20C28 18.5272 26.8061 17.3333 25.3333 17.3333H22.2092M14.6667 9.79083L16.8759 7.58172C17.9172 6.54032 19.6056 6.54032 20.6471 7.58172L24.4183 11.353C25.4597 12.3944 25.4597 14.0828 24.4183 15.1241L13.1046 26.4379M9.33333 22.6667H9.34667'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2.66667}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)


export default SwatchIcon