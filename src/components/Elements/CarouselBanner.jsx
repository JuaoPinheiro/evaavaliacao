import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../../assets/carousel1.png";
import Carousel2 from "../../assets/carousel2.png";
import Carousel3 from "../../assets/carousel3.png";
import Carousel4 from '../../assets/clothingbanner.png'
import * as C from '../../home/styles'


export default function CarouselBanner() {
    return (
        <Carousel>
            <C.DivCarousel>
                <C.ImageCarousel1 src={Carousel1} />
                <C.H1Carousel>Seu livros favoritos</C.H1Carousel>
                <C.ParagraphCarousel>estão te esperando aqui!</C.ParagraphCarousel>
            </C.DivCarousel>
            <C.DivCarousel>
                <img src={Carousel2} />
                <C.H1Carousel>As melhores cadeiras e</C.H1Carousel>
                <C.ParagraphCarousel>
                    decorações para seu escritório!
                </C.ParagraphCarousel>
            </C.DivCarousel>
            <C.DivCarousel>
                <img src={Carousel3} />
                <C.H1Carousel>Os melhores games</C.H1Carousel>
                <C.ParagraphCarousel>você só encontra aqui!</C.ParagraphCarousel>
            </C.DivCarousel>
            <C.DivCarousel>
                <img src={Carousel4} />
                <C.H1Carousel>Tenha um vestuário</C.H1Carousel>
                <C.ParagraphCarousel>impecável!</C.ParagraphCarousel>
            </C.DivCarousel>
        </Carousel>
    )
}