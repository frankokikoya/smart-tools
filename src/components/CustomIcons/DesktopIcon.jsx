import React from 'react';

const DesktopIcon = ({ isSelected = false, ...props }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 25 24'
        width='1.5em'
        height='1.5em'
        fill='none'
        {...props}
    >
        <path
            d='M8.7998 20H16.7998M2.7998 6C2.7998 5.46957 3.01052 4.96086 3.38559 4.58579C3.76066 4.21071 4.26937 4 4.7998 4H20.7998C21.3302 4 21.8389 4.21071 22.214 4.58579C22.5891 4.96086 22.7998 5.46957 22.7998 6V15C22.7998 15.5304 22.5891 16.0391 22.214 16.4142C21.8389 16.7893 21.3302 17 20.7998 17H4.7998C4.26937 17 3.76066 16.7893 3.38559 16.4142C3.01052 16.0391 2.7998 15.5304 2.7998 15V6Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

export default DesktopIcon;