import React from 'react'
import { Link } from 'react-router-dom'

export default function Livre({title, resume, cover, price, id}) {
  return (
    
        <>
            {cover && <figure><img src={cover} alt={title} /></figure>}
            <div className="card-body py-4 px-2">
            <Link to="/" className="card-title">
                {title}
                <span className="ml-1 badge bg-yellow-800 text-gray-200 text-xs"> {price} XAF</span>
            </Link>
            <div className="card-body py-4">
                <p> {resume} </p>
            </div>
                <button className="btn-sm border border-yellow-800 text-yellow-800 
                hover:bg-yellow-800 hover:text-white ease-in-out duration-200 hover:border-none">
                    <Link> Lire plus...</Link>
                </button>
            </div>
        </>
  )
}
