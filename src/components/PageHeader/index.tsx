import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backicon from '../../assets/images/icons/back.svg';

import './styles.css';

interface pageHeaderProps {
    title: string;
}

// o componente chamado pageheader é um fuctioncomponent 
// FC e estou passando os parametros para ele
const PageHeader: React.FC<pageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backicon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
            </div>

            {props.children}
        </header>
    );
}

export default PageHeader;