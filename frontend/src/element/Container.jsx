import React from 'react'

export default function Container({children}) {
  return (
    <div className="container mx-auto px-10 lg:px-5">{children}</div>
  )
}
