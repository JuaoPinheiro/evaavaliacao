
import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import * as C from './styles'
import api from '../../services/api'


export default function OffersCarousel() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('/products').then(({ data }) => {
            setProducts(data)        
        })

        console.log(products)
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
                <C.H2Highlights>Destaques</C.H2Highlights>
            </C.TextHighlights>
            <Carousel
                itemsToShow={4}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >

                {products?.map((product) => (
                    <C.AllProductsCarousel>
                        <div className='sizeDiv'>
                            <div key={product.id}>
                                <img src={product} alt="" />
                                <p className='paragraph-principal'>{product.name}</p>
                                <p>{product.star}*<C.Star/></p>
                                <p className='price-old'> R$ {product.price}</p>
                                <C.H1Price>R$ {product.promotional_price}</C.H1Price>
                                <button>Comprar</button>
                            </div>
                        </div>
                    </C.AllProductsCarousel>
                ))}
            </Carousel>
        </C.Container>
    )
}