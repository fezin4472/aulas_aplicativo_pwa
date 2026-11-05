import { SEARCHONLOCALSTORAGE, SAVEONLOCALSTORAGE } from './localstorage.service'

export const saveClient = (client) => {
    const clients = SEARCHONLOCALSTORAGE('clients') || [];
    if(!client.id){
        client.id = Date.now();
        clients.push(client);
    }else{
        const index = clients.findIndex((c) => c.id === client.id);
        clients[index] = client;
    }

    SAVEONLOCALSTORAGE("clients", clients)
};

export const searchClients = () => {
    return SEARCHONLOCALSTORAGE("clients") || [];
};