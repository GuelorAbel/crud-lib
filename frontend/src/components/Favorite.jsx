import axios from 'axios';
import React from 'react'
import { useEffect, useState  } from 'react';
import Container from '../element/Container';
import MdTitle from '../element/MdTitle';
import Livre from './Livre';

export default function Favorite() {
    // états / données
    const [livres, setLivres] = useState([]);

    // comportements
    useEffect(() => {
        const fetchLastBook = async () => {
            try{
                const res = await axios.get("http://localhost:8800")
                setLivres(res.data);
            }catch{
                console.log(err);
            }
        }
        fetchLastBook()
    }, [])
    // rendu navigateur
    return (
        <section>
            <Container>
                <MdTitle className="text-right py-6">Les derniers livres</MdTitle>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-12">
                    {livres.map(livre =>(
                        <div className="card w-full mx-auto shadow-md" key={livre.id}>
                        <Livre 
                            title={livre.title} 
                            resume={livre.resume} 
                            cover={livre.cover}
                            price={livre.price} 
                        />

                        </div>
                    ))}
                </div>

            </Container>
        </section>
    )
}
