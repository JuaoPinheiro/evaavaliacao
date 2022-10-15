import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import * as C from "./styles";
import api from "../../../services/api";

import Books from '../../../assets/books.png'
import Office from '../../../assets/office.png'
import Clothing from '../../../assets/clothing.png'
import Games from '../../../assets/games.jpg'
import Movies from '../../../assets/movies.jpg'
import Smartphones from '../../../assets/smartphone.jpg'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 4 },
];

const images = {
    Livros: Books,
    Escritório: Office,
    Vestuário: Clothing,
    Jogos: Games,
    Filmes: Movies,
    Smartphones: Smartphones,
}


export default function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        api.get('/categories').then(({ data }) => {
            setCategories(formatResponse(data))
        })
    }, [])

    const formatResponse = (data) => {
        data = data.map((category) => {
            return {
                ...category,
                image: images[category.name],
            }
        })
        return data
    }

    return (

        <C.Div>
            <Carousel
                itemsToShow={4}
                breakPoints={breakPoints}
            >
                {categories &&
                    categories?.map((category) => (
                        <C.AllProductsCarousel>
                            <div className="sizeDiv">
                                <div key={category?.id}>
                                    <img
                                        className="image-product"
                                        src={category?.image}
                                        alt={category?.name}
                                    />
                                    <p className="paragraph-principal">{category?.name}</p>
                                </div>
                            </div>
                        </C.AllProductsCarousel>
                    ))}
            </Carousel>
        </C.Div>
    );
}

