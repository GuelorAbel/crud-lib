import React from 'react'

export default function Button({children, className}) {
  return (
    <button className={`${className} btn-sm border border-yellow-800 text-yellow-800 hover:bg-yellow-800 
    hover:text-white ease-in-out duration-200 hover:border-none"`}>
        {children}
    </button>
  )
}
