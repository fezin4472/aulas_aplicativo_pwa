import { SEARCHONLOCALSTORAGE, SAVEONLOCALSTORAGE } from './localstorage.service'

export const saveClient = (client) => {
    const clients = SEARCHONLOCALSTORAGE('clients') || [];
    clients.push(client);
    SAVEONLOCALSTORAGE("clients", clients)
};

export const searchClients = () => {
    return SEARCHONLOCALSTORAGE("clients") || [];
}