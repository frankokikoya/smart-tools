import React from 'react';

const EyeIcon = ({ isSelected = false, ...props }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        width='1.5em'
        height='1.5em'
        fill='none'
        {...props}
    >
        <path
            d='M19.9996 16C19.9996 18.2092 18.2086 20 15.9996 20C13.7904 20 11.9995 18.2092 11.9995 16C11.9995 13.7908 13.7904 12 15.9996 12C18.2086 12 19.9996 13.7908 19.9996 16Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2.66667}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M3.27734 16C4.97637 10.5905 10.0301 6.66663 16.0003 6.66663C21.9704 6.66663 27.0241 10.5905 28.7232 16C27.0241 21.4094 21.9704 25.3333 16.0003 25.3333C10.0301 25.3333 4.97634 21.4094 3.27734 16Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2.66667}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

export default EyeIcon;