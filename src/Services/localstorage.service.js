function SEARCHONLOCALSTORAGE(key) {
    const value = localStorage.getItem(key);
    if(value){
        return JSON.parse(value);
    };
};

function SAVEONLOCALSTORAGE (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
};

export { SEARCHONLOCALSTORAGE, SAVEONLOCALSTORAGE };