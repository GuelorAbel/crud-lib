import { useState } from "react";
import Button from "../element/Button";
import Container from "../element/Container";
import MdTitle from "../element/MdTitle"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReadBook from '../assets/readBook.png'


export default function Form() {
    // états
    const [livre, setLivre] = useState({
        title: "",
        resume: "",
        price: null,
        cover: "",
    })
    // initialisation de la redirection
    const navigate = useNavigate();

    // comportements
    const handleChange = (e) => {
        setLivre(prev => ({...prev, [e.target.name]: e.target.value}));
    };
    console.log(livre);
    // soumission du formulaire au click
    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/creer", livre)
            // redirection vers la boutique
            navigate("/")
            
        }catch(err) {
            console.log(err);
        }
    }

    // rendu navigateur
    return (
        <section>
            <Container>
                {/* formulaire d'ajout d'un livre dans la BD */}
                <div className="grid md:grid-cols-3 place-items-center pt-6">
                    <div className="col-span-3 md:col-span-2">
                        <form>
                            <MdTitle className="mb-9"> Ajouter un livre </MdTitle>
                            <div>
                                <input 
                                    type="text" className="inputForm" placeholder="Entrer le titre du livre" name="title"
                                    onChange={handleChange} 
                                />
                                <input 
                                    type="text" className="inputForm" placeholder="Entrer la description du livre" name="resume"
                                    onChange={handleChange} 
                                />
                                <input 
                                    type="number" className="inputForm" placeholder="Entrer le prix du livre" name="price"
                                    onChange={handleChange} 
                                />
                                <input 
                                    type="text" className="inputForm" placeholder="Ajouter la cuverture du livre" name="cover"
                                    onChange={handleChange} 
                                />

                                {/* bouton de soumission */}
                                <Button className="ml-3" type="submit" onClick={handleClick}> Enregistrer </Button>

                            </div>
                        </form>
                    </div>

                    <div className="col-span-3 md:col-span-1">
                        <img src={ReadBook} alt="Illustration qui montre deux personnes lisant un livre"
                            className="w-96 mx-auto"
                        />
                    </div>
                </div>
                
            </Container>
        </section>
    )
}
