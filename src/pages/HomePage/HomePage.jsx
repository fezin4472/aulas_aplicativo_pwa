import Botaocustomizado from "../../komponenten/BotaoCustomizado/BotaoCustomizado";
import Main from "../../komponenten/Voornaamst/Main";

import { useNavigate } from "react-router-dom";

import './HomePage.css'

function HOMEPAGE() {
    const navigate = useNavigate();

    return (
        <Main title="Home Page">

            <Botaocustomizado
                type="primary"
                onClick={() => navigate('/products-list')}
            >
                PRODUCTS LIST
            </Botaocustomizado>
            <Botaocustomizado
                type="secondary"
                onClick={() => navigate('/tasks-list')}
            >
                TASKS LIST
            </Botaocustomizado>
            <Botaocustomizado
                type="primary"
                onClick={() => navigate('/register')}
            >
                REGISTER
            </Botaocustomizado>
            <Botaocustomizado
                type="secondary"
                onClick={() => navigate('/clients-list')}
            >
                CLIENTS LIST
            </Botaocustomizado>
        </Main>
    );
}

export default HOMEPAGE;