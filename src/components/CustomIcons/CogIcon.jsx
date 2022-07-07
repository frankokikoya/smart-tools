import React from 'react';

const CogIcon = ({ isSelected = false, ...props }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        width='1.5em'
        height='1.5em'
        fill='none'
        {...props}
    >
        <path
            d='M13.7661 5.75641C14.3347 3.41453 17.6653 3.41453 18.2339 5.75641C18.6011 7.26924 20.3343 7.98717 21.6637 7.17713C23.7217 5.92318 26.0768 8.27826 24.8229 10.3362C24.0128 11.6657 24.7308 13.3989 26.2436 13.7661C28.5855 14.3347 28.5855 17.6653 26.2436 18.2339C24.7308 18.6011 24.0128 20.3343 24.8229 21.6637C26.0768 23.7217 23.7217 26.0768 21.6637 24.8229C20.3343 24.0128 18.6011 24.7308 18.2339 26.2436C17.6653 28.5855 14.3347 28.5855 13.7661 26.2436C13.3989 24.7308 11.6657 24.0128 10.3362 24.8229C8.27826 26.0768 5.92318 23.7217 7.17713 21.6637C7.98717 20.3343 7.26924 18.6011 5.75641 18.2339C3.41453 17.6653 3.41453 14.3347 5.75641 13.7661C7.26924 13.3989 7.98716 11.6657 7.17713 10.3362C5.92318 8.27826 8.27826 5.92318 10.3362 7.17713C11.6657 7.98716 13.3989 7.26924 13.7661 5.75641Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2.66667}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M20 16C20 18.2092 18.2092 20 16 20C13.7908 20 12 18.2092 12 16C12 13.7908 13.7908 12 16 12C18.2092 12 20 13.7908 20 16Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2.66667}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

export default CogIcon;