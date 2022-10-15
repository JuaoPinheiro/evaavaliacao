import CategoryCarousel from "../Feautures/CategoryCarousel/App";
import GenericCarousel from "../Feautures/GenericCarousel/App";

export default function CarouselProducts({ data }){
    return(
        <>
        <CategoryCarousel/>
        <GenericCarousel data={data} title='Destaques'/>
        <GenericCarousel categoryId={1} data={data} title='Destaques em livros'/>
        <GenericCarousel
            categoryId={2}
            data={data}
            title='Destaques em escritório'
            />

            <GenericCarousel
                categoryId={3}
                data={data}
                title='Destaques em vestuário'/>

                <GenericCarousel categoryId={4} data={data} title='Destaques em games'/>
        </>
    )
}