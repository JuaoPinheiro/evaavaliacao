import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import * as C from './styles'
import api from '../../services/api'


export default function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        api.get('/categories').then(({ data }) => {
            setCategories(data)
        })
    }, [])

    // console.log(categories[1])



    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 4 }
    ]
    return (
        <C.Container>
            <Carousel
                itemsToShow={4}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >

                {categories?.map((category) => (
                    <C.AllProductsCarousel>
                        <div className='sizeDiv'>
                            <div key={category.id}>
                                <img src={category.image} alt="" />
                                <p className='paragraph-principal'>{category.name}</p>
                            </div>
                        </div>
                    </C.AllProductsCarousel>
                ))}
            </Carousel>
        </C.Container>
    )
}