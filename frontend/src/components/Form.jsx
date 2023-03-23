import { useState } from "react";
import Button from "../element/Button";
import Container from "../element/Container";
import MdTitle from "../element/MdTitle"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Form() {
    // états
    const [livres, setLivres] = useState({
        title: "",
        resume: "",
        price: null,
        cover: "",
    })
    // initialisation de la redirection
    const navigate = useNavigate();

    // comportements
    const handleChange = (e) => {
        setLivres((prev) => ({...prev, [e.target.name]: e.target.value }));
    };
    // soumission du formulaire au click
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/ajoutLivre", livres)
            // redirection vers la boutique
            navigate("/boutique")
            
        }catch(err) {
            console.log(err);
        }
    }

    // rendu navigateur
    return (
        <section>
            <Container>
                {/* formulaire d'ajout d'un livre dans la BD */}
                <form className="mb-6">

                    <MdTitle className="text-center mt-6 mb-3">Ajouter un nouveau livre</MdTitle>

                    <input type="text" placeholder="Titre du livre" className="input w-[80%] mt-4 outline-yellow-800 
                    border border-gray-200" name="title" onChange={handleChange}/>

                    <input type="text" placeholder="Résumé du livre" className="input w-[80%] mt-4 outline-yellow-800 
                    border border-gray-200" name="resume" onChange={handleChange}/>

                    <input type="number" placeholder="Prix" className="input w-[80%] mt-4 outline-yellow-800 border 
                    border-gray-200" name="price" onChange={handleChange}/>

                    <input type="text" placeholder="Image du livre" className="input w-[80%] mt-4 outline-yellow-800 
                    border border-gray-200" name="cover" onChange={handleChange}/>

                    {/* bouton de soumission */}
                    <Button className="ml-4 w-[18%]" onClick={handleClick}>Enregistrer</Button>

                </form>
                
            </Container>
        </section>
    )
}
