
import React, { useEffect, useState } from "react";
import * as C from "./styles";


import CarouselProducts from "../components/Elements/CarouselProducts";
import NewsLetter from "../components/Elements/NewsLetter";
import CarouselBanner from "../components/Elements/CarouselBanner";
import Header from "../components/Elements/Header";
import Services from "../components/Elements/Services";
import Footer from '../components/Elements/Footer'
import api from "../services/api";



function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setData(data)
    })
  }, [])
  
  return (
    <C.Container>
      <Header />
      <CarouselBanner />
      <Services />
      <CarouselProducts data={data}/>
      <NewsLetter />
      <Footer />
    </C.Container>
  );
}

export default App;
