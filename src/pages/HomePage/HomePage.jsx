import Botaocustomizado from "../../komponenten/BotaoCustomizado/BotaoCustomizado";
import Main from "../../komponenten/Voornaamst/Main";

function HOMEPAGE() {
    return (
        <Main>
            main content
            <Botaocustomizado
                type="primary"
                onClick={() => alert("até amanhã")}
            >
                salvar
            </Botaocustomizado>
            <Botaocustomizado
                type="secondary"
                onClick={() => alert("se deus quiser")}
            >
                cancelar
            </Botaocustomizado>
            <Botaocustomizado>ahhhh</Botaocustomizado>
        </Main>
    )
}

export default HOMEPAGE;