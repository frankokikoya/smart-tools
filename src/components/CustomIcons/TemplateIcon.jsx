import React from 'react';

const TemplateIcon = ({ isSelected = false, ...props }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        width='1.5em'
        height='1.5em'
        fill='none'
        {...props}
    >
        <path
            d='M5.3335 6.66671C5.3335 5.93033 5.93046 5.33337 6.66683 5.33337H25.3335C26.0699 5.33337 26.6668 5.93033 26.6668 6.66671V9.33337C26.6668 10.0697 26.0699 10.6667 25.3335 10.6667H6.66683C5.93046 10.6667 5.3335 10.0697 5.3335 9.33337V6.66671Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2.66667}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M5.3335 17.3333C5.3335 16.5969 5.93046 16 6.66683 16H14.6668C15.4032 16 16.0002 16.5969 16.0002 17.3333V25.3333C16.0002 26.0697 15.4032 26.6667 14.6668 26.6667H6.66683C5.93046 26.6667 5.3335 26.0697 5.3335 25.3333V17.3333Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2.66667}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M21.3335 17.3333C21.3335 16.5969 21.9304 16 22.6668 16H25.3335C26.0699 16 26.6668 16.5969 26.6668 17.3333V25.3333C26.6668 26.0697 26.0699 26.6667 25.3335 26.6667H22.6668C21.9304 26.6667 21.3335 26.0697 21.3335 25.3333V17.3333Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2.66667}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

export default TemplateIcon;