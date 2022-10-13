import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import * as C from './styles'

//Imagens
import Logo from '../assets/logoeva.png'
import Select from 'react-select'
import Carousel1 from '../assets/carousel1.png'
import Carousel2 from '../assets/carousel2.png'
import Carousel3 from '../assets/carousel3.png'

import Book from '../assets/books.png'
// import Office from '../assets/office.png'
// import Clothing from '../assets/clothing.png'


import OffersCarousel from '../components/OffersCarousel/App'
import BooksCarousel from '../components/BooksCarousel/App'
import OfficeCarousel from '../components/OfficeCarousel/App'
import ClothingCarousel from '../components/ClothingCarousel/App'
import CategoryCarousel from "../components/CategoryCarousel/App";
import GamesCarousel from '../components/GamesCarousel/App'





const options = [
  { value: 'chocolate', label: 'Livros' },
  { value: 'strawberry', label: 'Escritório' },
  { value: 'vanilla', label: 'Vestuário' },
  { value: 'vanilla', label: 'Informática' }
]



function App() {
  return (
    <C.Container>
      <C.Header>
        <img src={Logo} alt="" />
        <Select options={options} />
        <C.InputHeader type="text" />
        <C.AHeader href="">Minha conta</C.AHeader>
        <C.FaaUser />
        <C.AHeader href="">Carrinho</C.AHeader>
        <C.Cart />
      </C.Header>

      <Carousel>
        <C.DivCarousel>
          <C.ImageCarousel1 src={Carousel1} />
          <C.H1Carousel>Seu livros favoritos</C.H1Carousel>
          <C.ParagraphCarousel>estão te esperando aqui!</C.ParagraphCarousel>
        </C.DivCarousel>
        <C.DivCarousel>
          <img src={Carousel2} />
          <C.H1Carousel>As melhores cadeiras e</C.H1Carousel>
          <C.ParagraphCarousel>decorações para seu escritório!</C.ParagraphCarousel>
        </C.DivCarousel>
        <C.DivCarousel>
          <img src={Carousel3} />
          <C.H1Carousel>Os melhores</C.H1Carousel>
          <C.ParagraphCarousel>acessórios para o seu setup!</C.ParagraphCarousel>
        </C.DivCarousel>
      </Carousel>

      <C.Section>
        <div className="div-service">
          <C.Lock />
          <p>Site Seguro</p>
        </div>
        <div className="div-service">
          <C.Card />
          <p>Até 12x sem juros</p>
        </div>
        <div>
          <C.Truck />
          <p>Entrega para todo o Brasil</p>
        </div>
      </C.Section>

      <CategoryCarousel />
      <OffersCarousel />
      <BooksCarousel />
      <OfficeCarousel />
      <ClothingCarousel />
      <GamesCarousel />


      <C.NewsLetter>
        <C.ChartEmail />
        <h2>Receba nossas novidades, descontos e muito mais</h2>
        <div className="div-input">
          <form>
            <input type='name' placeholder="Digite seu nome" required />
            <input name="email" type="text" placeholder="Digite seu email" />
          </form>
        </div>
        <button type="submit">Eu quero receber novidades!</button>
      </C.NewsLetter>

      <C.Footer>

        <div className="DivAbout1">
          <h1>Eva Shop</h1>
          <div className="lineFooter"></div>
          <div className="about1">
            <C.Store />
            <a href="">Quem somos</a>
            <a href="">Políticas de privacidade</a>
            <a href="">Feedback de clientes</a>
            <a href="">Trocas e devoluções</a>
          </div>
        </div>



        <div className="about2">
          <C.Map />
          <p>Rua Av. Rio Negro, 1100<br />
            Jardim Roselandia<br />
            14406-005<br />
            Franca / SP</p>
        </div>


        <div className="about3">
          <C.Store />
          <div className="contact">
            <C.WhatsIcon />
            <p>(16) 9 98179-7325</p>
          </div>
          <div className="contact">
            <C.IconEmail />
            <p>contato@evacommerce.com.br</p>
          </div>
        </div>
      </C.Footer>
    </C.Container >
  )
}

export default App
