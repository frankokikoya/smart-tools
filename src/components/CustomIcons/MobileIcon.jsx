import React from 'react';

const MobileIcon = ({ isSelected = false, ...props }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 25 24'
        width='1.5em'
        height='1.5em'
        fill='none'
        {...props}
    >
        <path
            d='M16.7998 2H8.7998C7.69524 2 6.7998 2.89543 6.7998 4V20C6.7998 21.1046 7.69524 22 8.7998 22H16.7998C17.9044 22 18.7998 21.1046 18.7998 20V4C18.7998 2.89543 17.9044 2 16.7998 2Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M12.75 18H12.85'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

export default MobileIcon;