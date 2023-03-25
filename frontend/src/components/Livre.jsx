import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../element/Button'
import Paragraph from '../element/Paragraph'
// les icones
import { RiEdit2Fill, RiDeleteBin5Fill } from 'react-icons/ri'

export default function Livre({title, resume, cover, price}) {
  return (
    
        <Link>
            {cover && <figure><img src={cover} alt="" className="w-full h-72 bg-yellow-100" /></figure>}
            <div className="card-body py-4 px-2">
                <Link to="/" className="card-title">
                    {title}
                    <span className="ml-1 badge bg-yellow-800 text-gray-200 text-[11px]"> {price} XAF</span>
                </Link>
                <div className="card-body py-4 text-center">
                    <Paragraph> {resume} </Paragraph>
                </div>
                <Button >
                    <Link to="/creer"> Ajouter un livre</Link>
                </Button>
                
            </div>
        </Link>
  )
}
