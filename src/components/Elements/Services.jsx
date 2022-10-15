import * as C from '../../home/styles'


export default function Services() {
    return (
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
    )

}
