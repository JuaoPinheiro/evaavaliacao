import * as C from '../../home/styles'


export default function Footer() {
    return (
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
                <p>
                    Rua Av. Rio Negro, 1100
                    <br />
                    Jardim Roselandia
                    <br />
                    14406-005
                    <br />
                    Franca / SP
                </p>
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
    )

}
