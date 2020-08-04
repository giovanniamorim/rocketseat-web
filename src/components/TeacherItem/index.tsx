import React from 'react';

import { Link } from 'react-router-dom';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/29983678?s=460&u=5d93576d2b1ebc66de41765e26378c2af0c78e13&v=4" alt="Giovanni" />
                <div>
                    <strong>Giovanni Amorim</strong>Quimica
                        </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de quimica avançada
                        <br /><br />
                        Apaixonadopo r explodir coisas em laboratórios. Mais de 200 mil pessoas já passarm por minhas explosões.
                    </p>
            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em Contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;