import { useState } from "react";
import * as C from '../../home/styles'


function NewsLetter() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,8}(.[a-z]{2,8}])?/g

        if (regEx.test(email)) {
            setMessage('Cadastrado!')
        } else if (!regEx.test(email) && email != "") {
            setMessage('Email Inválido')
        } else {
            setMessage("")
        }
    }

    const handleOnChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className="app">
            <C.NewsLetter>
                <C.ChartEmail />
                <h2>Receba nossas novidades, descontos e muito mais</h2>

                <div className='div-message'>
                    <p className='message'>{message}</p>
                </div>
                <div className="div-input">
                    <input type='text' placeholder="Digite seu nome" />
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={handleOnChange} />
                </div>
                <button onClick={emailValidation}>Eu quero receber novidades!</button>
            </C.NewsLetter>
        </div>
    )
}

export default NewsLetter