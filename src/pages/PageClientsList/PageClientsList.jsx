import Main from "../../komponenten/Voornaamst/Main";
import { searchClients } from "../../Services/clients.service";
import './PageClientsList.css'

function PAGECLIENTSLIST() {
    const clients = searchClients();

    return (
        <Main title="clients list" returnTo="/">
            {clients.map((item) => {
                return (
                    <div className="PageClientsList-item">
                        <h3>{item.name}</h3>
                        <br />
                        
                    </div>
                )
            })}
        </Main>
    );
}

export default PAGECLIENTSLIST;