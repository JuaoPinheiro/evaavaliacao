import React from 'react'
import { useState } from "react";
import * as C from './styles'

function App() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,8}(.[a-z]{2,8}])?/g

        if (regEx.test(email)) {
            setMessage('Email válido!')
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

                <p className='message'>{message}</p>
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

export default App