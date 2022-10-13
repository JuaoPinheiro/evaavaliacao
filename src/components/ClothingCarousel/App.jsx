

import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import * as C from './styles'
import api from '../../services/api'


export default function ClothingCarousel() {
    const [clothing, setClothing] = useState([])

    useEffect(() => {
        api.get('/category/3').then(({ response }) => {
          setClothing(response)        
        })
    }, [])



    // console.log(products)

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 4 }
    ]
    return (
        <C.Container>
            <C.TextHighlights>
                <div className='line'></div>
                <C.H2Highlights>Destaques em vestuário</C.H2Highlights>
            </C.TextHighlights>
            <Carousel
                itemsToShow={4}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >

                {clothing && clothing?.map((category) => (
                    <C.AllProductsCarousel>
                        <div className='sizeDiv'>
                            <div key={category.id}>
                                <p className='paragraph-principal'>{category.name}</p>
                                <p>{category.star}*<C.Star/></p>
                                <p className='price-old'> R$ {category.price}</p>
                                <C.H1Price>R$ {category.promotional_price}</C.H1Price>
                                <button>Comprar</button>
                            </div>
                        </div>
                    </C.AllProductsCarousel>
                ))}
            </Carousel>
        </C.Container>
    )
}