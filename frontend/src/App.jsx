// les routes de l'app
import { Routes, Route } from 'react-router-dom'
// les pages
import Boutique from './pages/Boutique'
import Home from './pages/Home'
import AjoutLivre from './pages/AjoutLivre'
// les composants
import Footer from './components/Footer'
import Header from './components/Header'



export default function App() {
  // états/données
  // les comportements
  // rendu navigateur
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/boutique' element={<Boutique />} />
        <Route path='/creer' element={<AjoutLivre />} />
      </Routes>

      <Footer />
    </>
  )
}
