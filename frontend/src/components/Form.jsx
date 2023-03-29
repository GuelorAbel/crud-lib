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
    const onSubmit = async (e) =>{
        e.preventDefault()
        console.log(livre);
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
                <div className="grid md:grid-cols-3 place-items-center pt-6 mb-6">
                    <div className="col-span-3 md:col-span-2">
                        <form onSubmit={onSubmit}>
                            <MdTitle className="mb-9"> Ajouter un livre </MdTitle>
                            <div>
                                <input 
                                    type="text" className="inputForm" placeholder="Entrer le titre du livre" name="title"
                                    onChange={handleChange} value = {livre.title}
                                />
                                <input 
                                    type="text" className="inputForm" placeholder="Entrer la description du livre" name="resume"
                                    onChange={handleChange} value = {livre.resume}
                                />
                                <input 
                                    type="number" className="inputForm" placeholder="Entrer le prix du livre" name="price"
                                    onChange={handleChange} value = {livre.price}
                                />
                                <input 
                                    type="text" className="inputForm" placeholder="Ajouter la cuverture du livre" name="cover"
                                    onChange={handleChange} value = {livre.cover}
                                />

                                {/* bouton de soumission */}
                                <Button className="mt-3 block" type="submit"> Enregistrer </Button>

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
