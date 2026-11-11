import { useState } from "react";
import Main from "../../komponenten/Voornaamst/Main";
import { searchClients } from "../../Services/clients.service";
import "./PageClientsList.css";
import { IoAddCircle, IoMailOutline, IoPencilOutline, IoTrash } from "react-icons/io5";

import { SAVEONLOCALSTORAGE } from "../../Services/localstorage.service";
import { toast, Zoom } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CampoCustomizado from "../../komponenten/CampoCustomizado/CampoCustomizado";

function PAGECLIENTSLIST() {
    const navigate = useNavigate();
    const [clients, setClients] = useState(searchClients());
    const [searchTerm, setSearchTerm] = useState("");
    
    const deleteClient = (clientToDelete) => {
        if (confirm(`you'll delete ${clientToDelete}, you sure question mark`)) {
            const uptatedClients = clients.filter((item) => item.id !== clientToDelete.id);
            setClients(uptatedClients);
            SAVEONLOCALSTORAGE("clients", uptatedClients);
            toast.success("client removed", {theme: "colored", transition: Zoom})
        }
    };
    
    const editClient = (clientToEdit) => {
        navigate("/register/" + clientToEdit.id);
    };

    const filteredClients = clients.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <Main title="clients list" returnTo="/">
            <CampoCustomizado
                type="search"
                label="search"
                placeholder="type the client's name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredClients.map((item, index) => {
                return (
                    <div key={index} className="PageClientsList-item">
                        <div>
                            <h3>{item.name}</h3>
                            <span className="PageClientsList-item-email">
                                <IoMailOutline />
                                {item.email}
                            </span>
                        </div>

                        <div className="PageClientsList-item-action">
                            <IoPencilOutline size={24} onClick={() => editClient(item)}/>
                            <IoTrash
                                size={24}
                                color="red"
                                onClick={() => deleteClient(item)}
                            />
                        </div>
                    </div>
                );
            })}

            <div className="PageClientsList_addButton">
                <IoAddCircle />
            </div>
        </Main>
    );
}

export default PAGECLIENTSLIST;
