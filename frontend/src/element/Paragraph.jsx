import React from 'react'

export default function Paragraph({children, className}) {
  return (
    <p className={`${className} text-xs md:text-sm lg:text-base pt-3`}> {children} </p>
  )
}
