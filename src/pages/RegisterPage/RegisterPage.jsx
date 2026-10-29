import { useState } from "react"
import Main from "../../komponenten/Voornaamst/Main";
import CampoCustomizado from "../../komponenten/CampoCustomizado/CampoCustomizado"
import Botaocustomizado from "../../komponenten/BotaoCustomizado/BotaoCustomizado";
import { formatWithMask, MASK_CPF } from "../../utils/formatWithMask";

function REGISTERPAGE() {
    const {name, setName} = useState("");
    const {address, setAddress} = useState("");
    const {cpf, setCPF} = useState("");
    const {birthdate, setBirthdate} = useState("");
    const {email, setEmail} = useState("");
    const {password, setPassword} = useState("");

    const save = () => {
        const client = {
            name,
            address,
            cpf,
            birthdate,
            email,
            password,
        };
        console.log(client);
    }

    return (
        <Main title="new client" returnTo="/">
            <CampoCustomizado
                label="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <CampoCustomizado 
                label="Endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <CampoCustomizado 
                label="CPF"
                type="number"
                value={cpf}
                onChange={(e) => setCPF(formatWithMask(e.target.value, MASK_CPF))}
            />
            <CampoCustomizado 
                label="Data De Nasc."
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            />
            <CampoCustomizado
                label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <CampoCustomizado 
                label="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <CampoCustomizado 
                label="Confirmar senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Botaocustomizado type="primary" onClick={save}>
                save
            </Botaocustomizado>
        </Main>
    )
}

export default REGISTERPAGE;