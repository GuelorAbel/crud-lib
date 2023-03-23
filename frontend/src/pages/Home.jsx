

import Favorite from '../components/Favorite'
import HeroHome from '../components/HeroHome'

export default function Home() {
    // états / données
    // comportements
    // rendu navigateur
    return (
        <main>
            {/* tout les composants qui aide à construire la page d'accueil */}
            <HeroHome />
            <Favorite />
        </main>
    )
}
