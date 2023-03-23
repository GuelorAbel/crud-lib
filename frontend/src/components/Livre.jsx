import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../element/Button'
import Paragraph from '../element/Paragraph'

export default function Livre({title, resume, cover, price}) {
  return (
    
        <>
            {cover && <figure><img src={cover} alt={title} /></figure>}
            <div className="card-body py-4 px-2">
            <Link to="/" className="card-title">
                {title}
                <span className="ml-1 badge bg-yellow-800 text-gray-200 text-[11px]"> {price} XAF</span>
            </Link>
            <div className="card-body py-4">
                <Paragraph> {resume} </Paragraph>
            </div>
                <Button className="">
                    <Link> Lire plus...</Link>
                </Button>
            </div>
        </>
  )
}
