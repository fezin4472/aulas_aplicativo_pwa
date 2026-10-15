import { useState } from 'react';
import Botaocustomizado from '../../komponenten/BotaoCustomizado/BotaoCustomizado';
import Main from '../../komponenten/Voornaamst/Main'
import './PageTasksList.css'

function PAGETASKSLIST() {
    const [taskDescription, setTaskDescription] = useState("");

    const addTask = () => {};

    return (
        <Main title="TASKS LIST" returnTo="/">
            <input
                type="text"
                placeholder='type a task here'
                value={taskDescription}
                onChange={(event) => {
                    setTaskDescription(event.target.value);
                }}
            />

            <Botaocustomizado type="primary" onClick={addTask}>
                add task
            </Botaocustomizado>
        </Main>
    );
}

export default PAGETASKSLIST;