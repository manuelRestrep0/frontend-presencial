import React from 'react'
export function Title ({title}: {title:string}) {
    return <h1 className='font-bold text-black text-center text-[60px] sm:text-[56px]'>{title}</h1>
}

export function Subtitle ({subtitle}:{subtitle:string}){
    return <h2 className='font-bold text-black text-center text-[32px] sm:text-[40px]'>{subtitle}</h2>
}

export function PrincipalText({text}:{text:string}){
    return <h3 className='font-light font-roboto text-black text-center text-[20px] sm:text-[24px]'>{text}</h3>

}
export function PrincipalTextWhite({text}:{text:string}){
    return <h3 className='font-light font-roboto text-white text-center text-[20px] sm:text-[24px]'>{text}</h3>

}

export function PrincipalTextFucsia({text}:{text:string}){
    return <h3 className='font-light font-roboto text-fuchsia-800 text-center text-[20px] sm:text-[24px]'>{text}</h3>

}

export function Text({text}:{text:string}){
    return <h3 className='font-normal text-black text-[15px] sm:text-[16px] text-center sm:text-left'>{text}</h3>

}

