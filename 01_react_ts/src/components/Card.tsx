import React from 'react'
import type { PropsWithChildren,ReactNode } from 'react'

interface CradProps extends PropsWithChildren{
    title:string;
    footer?:ReactNode; //html ke ele hote h react node
}
// children aa rhe unko yu ka yu rakhlo ya destructure krlo 

function Card({title,children,footer}:CradProps) {
  return (
    <div>
        <h2>{title}</h2>
        <div>
             {children}
        </div>
        {footer && <footer>{footer}</footer>}
    </div>
  )
}

export default Card