import React from 'react'

export default function Titre({ children, className }) {
  return (
    <h1 className={`${className} text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl uppercase`}> 
        {children} 
    </h1>
  )
}
