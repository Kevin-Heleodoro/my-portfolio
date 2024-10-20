"use client"
import React from 'react';

import { BtnList } from '@/app/data';
import NavButton from '@/components/navigation/NavButton';

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;
    const radius = 'calc(30vw - 1rem)';

    return (
        <div className='w-full fixed h-screen flex items-center justify-center'>
            <div className="relative w-[40vw] h-[40vw]">
                {BtnList.map((btn, index) => {
                    const angleRad = (index * angleIncrement * Math.PI) / 180;
                    const x = `calc(${radius} * ${Math.cos(angleRad).toFixed(6)})`;
                    const y = `calc(${radius} * ${Math.sin(angleRad).toFixed(6)})`;

                    return (
                        <NavButton key={btn.label} x={x} y={y} {...btn} />
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;