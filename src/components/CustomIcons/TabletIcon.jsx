import React from 'react';

const TabletIcon = ({ isSelected = false, ...props }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 25 24'
        width='1.5em'
        height='1.5em'
        fill='none'
        {...props}
    >
        <path
            d='M18.7998 2H6.7998C5.69524 2 4.7998 2.89543 4.7998 4V20C4.7998 21.1046 5.69524 22 6.7998 22H18.7998C19.9044 22 20.7998 21.1046 20.7998 20V4C20.7998 2.89543 19.9044 2 18.7998 2Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M11.7998 18H13.7998'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

export default TabletIcon;