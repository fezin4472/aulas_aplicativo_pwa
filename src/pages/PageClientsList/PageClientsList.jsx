import { IoAddCircle, IoMailOutline, IoPencilOutline, IoTrash } from "react-icons/io5";
import Main from "../../komponenten/Voornaamst/Main";
import { searchClients } from "../../Services/clients.service";
import "./PageClientsList.css";
import { useState } from "react";
import { SAVEONLOCALSTORAGE } from "../../Services/localstorage.service";
import { toast, Zoom } from "react-toastify";
import { useNavigate } from "react-router-dom";

function PAGECLIENTSLIST() {
    const navigate = useNavigate();
    const [clients, setClients] = useState(searchClients());
    
    const deleteClient = (clientToDelete) => {
        if(confirm(`you'll delete ${clientToDelete}, you sure question mark`)){
            const uptatedClients = clients.filter((item) => item.id !== clientToDelete.id);
            setClients(uptatedClients);
            SAVEONLOCALSTORAGE("clients", uptatedClients);
            toast.success("client removed", {theme: "colored", transition: Zoom})
        }
    };
    
    const editClient = (clientToEdit) => {
        navigate("/register/" + clientToEdit.id);
    };

    return (
        <Main title="clients list" returnTo="/">
            {clients.map((item) => {
                return (
                    <div className="PageClientsList-item">
                        <div>
                            <h3>{item.name}</h3>
                            <span className="PageClientsList-item-email">
                                <IoMailOutline />
                                {item.email}
                            </span>
                        </div>

                        <div>
                            <IoPencilOutline onClick={() => editClient(item)}/>
                            <IoTrash onClick={() => deleteClient(item)}/>
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
