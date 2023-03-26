import React from 'react'
import Container from '../element/Container'
import Titre from '../element/Titre'
import Paragraph from '../element/Paragraph'
import IMGSHOP from '../assets/boutique.gif'

export default function HeroShop() {
    // états / données
    // comportements
    // rendu navigateur
  return (
    <section>
        <Container>
            <div className="grid md:grid-cols-2 pt-4">
                    <div className="my-auto">
                        <Titre>Découvrir notre magasin</Titre>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint odio libero asperiores
                            molestias assumenda distinctio vero labore. In recusandae amet consequatur nihil vero libero alias, 
                            laboriosam quaerat tempora, aspernatur officia.
                        </Paragraph>
                    </div>

                    <div>
                        <img src={IMGSHOP} alt="Illustration de couverture" className="mx-auto w-[60%]" />
                    </div>
            </div>
        </Container>
    </section>
  )
}
