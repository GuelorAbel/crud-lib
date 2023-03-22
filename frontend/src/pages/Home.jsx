import React from 'react'
import Container from '../element/Container'
import Titre from '../element/Titre'
import Hero from '../assets/hero.png'
import Favorite from '../components/Favorite'

export default function Home() {
    // états / données
    // comportements
    // rendu navigateur
    return (
        <main>
            <section>
                <Container>
                    <div className="grid md:grid-cols-2 pt-4">
                        <div className="my-auto">
                            <Titre>La boutique moderne</Titre>
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint odio libero asperiores
                                molestias assumenda distinctio vero labore. In recusandae amet consequatur nihil vero libero alias, laboriosam quaerat tempora, aspernatur officia.
                            </p>
                        </div>

                        <div>
                            <img src={Hero} alt="Illustration de couverture" className="mx-auto w-[60%]" />
                        </div>
                    </div>
                </Container>
            </section>

            <Favorite />
        </main>
    )
}
