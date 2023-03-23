// éléments globaux
import Container from "../element/Container"
import Titre from "../element/Titre"
import Paragraph from "../element/Paragraph"
// l'image de couverture
import ImgCover from '../assets/hero.png'

export default function Hero() {
  return (
    <section>
        <Container>
            <div className="grid md:grid-cols-2 pt-4">
                <div className="my-auto">
                    <Titre>La boutique moderne</Titre>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint odio libero asperiores
                        molestias assumenda distinctio vero labore. In recusandae amet consequatur nihil vero libero alias, laboriosam quaerat tempora, aspernatur officia.
                    </Paragraph>
                </div>

                <div>
                    <img src={ImgCover} alt="Illustration de couverture" className="mx-auto w-[60%]" />
                </div>
            </div>
        </Container>
    </section>
  )
}
