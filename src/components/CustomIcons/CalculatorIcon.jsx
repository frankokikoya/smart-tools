import React from 'react';

const CalculatorIcon = ({ isSelected = false, ...props }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        width='1.5em'
        height='1.5em'
        fill='none'
        {...props}
    >
        <path
            d='M11.9998 9.33333H19.9998H11.9998ZM19.9998 22.6667V18.6667V22.6667ZM15.9998 22.6667H16.0132H15.9998ZM11.9998 22.6667H12.0132H11.9998ZM11.9998 18.6667H12.0132H11.9998ZM15.9998 18.6667H16.0132H15.9998ZM19.9998 14.6667H20.0132H19.9998ZM15.9998 14.6667H16.0132H15.9998ZM11.9998 14.6667H12.0132H11.9998ZM9.33317 28H22.6665C24.1393 28 25.3332 26.8061 25.3332 25.3333V6.66667C25.3332 5.19391 24.1393 4 22.6665 4H9.33317C7.86041 4 6.6665 5.19391 6.6665 6.66667V25.3333C6.6665 26.8061 7.86041 28 9.33317 28Z'
            stroke={isSelected ? '#FF9900' : '#34495B'}
            strokeWidth={2.66667}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

export default CalculatorIcon;