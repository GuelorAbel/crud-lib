import React, { useState, useEffect } from 'react'
import Container from '../element/Container'
import MdTitle from '../element/MdTitle'
import Livre from './Livre'
import axios from 'axios'

export default function Shop() {
    // états / données
    const [livres, setLivres] = useState([])

    // comportements
    useEffect(() => {
        const fetchAllBook = async () => {
            try{
                const res = await axios.get("http://localhost:5000/boutique")
                setLivres(res.data);
            }catch{
                console.log(err);
            }
        }
        fetchAllBook()
    }, [])
    
    // rendu navigateur
  return (
    <section>
        <Container>
            <MdTitle className="text-center py-6">Nos produits</MdTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-12">
                    {livres.map(livre =>(
                        <div className="card w-full mx-auto shadow-sm hover:shadow-lg transition duration-300" key={livre.id}>
                        <Livre 
                            title={livre.title} 
                            resume={livre.resume} 
                            cover={livre.cover}
                            price={livre.price} 
                        />

                        </div>
                    ))
                    }
                </div>
        </Container>
    </section>
  )
}
