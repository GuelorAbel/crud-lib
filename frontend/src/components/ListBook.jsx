import React, { useState, useEffect } from 'react'
import Container from '../element/Container'
import MdTitle from '../element/MdTitle'
import axios from 'axios'
import BookTable from './BookTable'

export default function ListBook() {
    // états / données
    const [books, setBooks] = useState([]);

    // comportements
    // qui affiche les livres dans mon tableau
    useEffect(() => {
        const listBook = async () => {
            try{
                const res = await axios.get("http://localhost:5000/livre")
                setBooks(res.data);
            }catch{
                console.log(err);
            }
        }
        listBook()
    }, [])
    
    // qui supprime un livre à partir de 'lid reçu dans l'url
    const handleDelete = async (id)=>{
        try {
            await axios.delete(`http://localhost:5000/livre/${id}`)
            // si tout a fonctionné, raffraichit la page
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }

    // rendu navigateur
    return (
    <section>
        <Container>
            <MdTitle>Gestionnaire des livres</MdTitle>
            {/* présentation sous la forme d'un tableau */}
            <div className="overflow-x-auto mt-12 mb-6">
                <table className="table table-zebra w-full border-collapse border border-slate-200">
                    {/* head */}
                    <thead>
                    <tr className="text-left bg-yellow-800 text-white">
                        <th className="border border-slate-200">ID </th>
                        <th className="border border-slate-200">TITRE DU LIVRE</th>
                        <th className="border border-slate-200 text-center">ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {
                            books.map(item => (
                                <tr key={item.id}>
                                    <BookTable title={item.title} id={item.id} onClick={()=>handleDelete(item.id)} />
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </Container>
    </section>
  )
}
