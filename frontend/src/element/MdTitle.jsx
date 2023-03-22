import React from 'react'

export default function MdTitle({children, className}) {
  return (
    <h2 className={`${className} text-2xl md:text-3xl lg:text-4xl`}>
        {children}
    </h2>
  )
}
