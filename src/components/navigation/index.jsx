"use client"
import React from 'react'

import { BtnList } from '@/app/data'
import NavButton from './NavButton'

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
                        <NavButton key={index} x={x} y={y} {...btn} />
                        // <button
                        //     key={index}
                        //     className='absolute top-1/2 left-1/2'
                        //     style={{
                        //         transform: `translate(calc(${x} - 50%), calc(${y} - 50%))`
                        //     }}
                        // >
                        //     {btn.label}
                        // </button>
                    )
                })}
            </div>
        </div>
    )
}


export default Navigation