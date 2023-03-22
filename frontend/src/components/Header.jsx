import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../element/Container'
import Logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="sticky top-0 left-0 py-6 text-gray-800">
        <Container>
            <nav className="flex justify-between items-center">
                <div>
                    <img src={Logo} alt="Le logo de la companie" className="w-12 sm:w-20"/>
                </div>
                <ul>
                    <Link to="/" className="ml-4">Accueil</Link>
                    <Link to="/boutique" className="ml-4">Boutique</Link>
                    <Link to="/ajoutLivre" className="ml-4">Créer un livre</Link>
                </ul>
            </nav>
        </Container>
    </header>
  )
}
