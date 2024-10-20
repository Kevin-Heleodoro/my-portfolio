import React from 'react';

const NavButton = ({ x, y, label }) => {
    return (
        <button
            className='absolute top-1/2 left-1/2'
            style={{
                transform: `translate(calc(${x} - 50%), calc(${y} - 50%))`
            }}
        >
            {label}
        </button>
    );
};

export default NavButton;