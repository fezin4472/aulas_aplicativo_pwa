/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import Main from "../../komponenten/Voornaamst/Main";
import CampoCustomizado from "../../komponenten/CampoCustomizado/CampoCustomizado";
import Botaocustomizado from "../../komponenten/BotaoCustomizado/BotaoCustomizado";
import { formatWithMask, MASK_CPF } from "../../utils/formatWithMask";
import { toast, Zoom } from "react-toastify";
import CPFvalidation from "../../utils/CPFvalidation";
import Emailvalidation from "../../utils/Emailvalidation.js";
import { saveClient, searchClients } from "../../Services/clients.service";
import { useParams } from "react-router-dom";

function REGISTERPAGE() {
    const [formClient, setFormClient] = useState({
        id: "",
        name: "",
        address: "",
        cpf: "",
        birthdate: "",
        email: "",
    });

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            const clientToEdit = searchClients().find(
                (item) => item.id === +params.id,
            );

            if (clientToEdit) {
                setFormClient(clientToEdit);
            }
        }
    }, [params.id]);

    const save = () => {
        if (!formClient.name.trim() || !formClient.email.trim()) {
            toast.warn("OBRIGATORY FILL", { theme: "colored", transition: Zoom });
            return;
        }

        if (!Emailvalidation(formClient.email)) {
            toast.error("INVALID EMAIL", { theme: "colored", transition: Zoom });
        }

        if (formClient.cpf.trim() && CPFvalidation(formClient.cpf) === false) {
            toast.error("INVALID", { theme: "colored", transition: Zoom });
        }

        saveClient(formClient);
        toast.success("client saved", { theme: "colored", transition: Zoom });
    };

    const title = formClient.id ? "edit client" : "new client";

    return (
        <Main title={title} returnTo="/">
            <CampoCustomizado
                label="Nome"
                value={formClient.name}
                onChange={(e) =>
                    setFormClient({ ...formClient, name: e.target.value })
                }
                maxLength={50}
            />
            <CampoCustomizado
                label="Endereço"
                value={formClient.address}
                onChange={(e) =>
                    setFormClient({ ...formClient, address: e.target.value })
                }
            />
            <CampoCustomizado
                label="CPF"
                value={formClient.cpf}
                onChange={(e) =>
                    setFormClient({ ...formClient, cpf: formatWithMask(e.target.value, MASK_CPF)  })
                }
            />
            <CampoCustomizado
                label="Data De Nasc."
                type="date"
                value={formClient.birthdate}
                onChange={(e) =>
                    setFormClient({ ...formClient, birthdate: e.target.value })
                }
            />
            <CampoCustomizado
                label="E-mail"
                value={formClient.email}
                onChange={(e) =>
                    setFormClient({ ...formClient, email: e.target.value })
                }
            />

            <Botaocustomizado type="primary" onClick={save}>
                save
            </Botaocustomizado>
        </Main>
    );
}

export default REGISTERPAGE;
