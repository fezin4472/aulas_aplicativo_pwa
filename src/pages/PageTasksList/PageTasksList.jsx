import { useState } from 'react';
import Botaocustomizado from '../../komponenten/BotaoCustomizado/BotaoCustomizado';
import Main from '../../komponenten/Voornaamst/Main'
import './PageTasksList.css'
import CampoCustomizado from '../../komponenten/CampoCustomizado/CampoCustomizado';

function PAGETASKSLIST() {
    const [taskDescription, setTaskDescription] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        tasks.push(taskDescription);
        setTasks([...tasks])
    };

    return (
        <Main title="TASKS LIST" returnTo="/">
            <CampoCustomizado
                label="task" 
                type="text"
                placeholder="type the task description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                onBlur={() => console.log("O NUMERO UM DO MUNDO NO BEACH TENIS VAI JOGAR NO MESMO TORNEIO QUE EU ALLEZ GIANOTTI")}
            />

            <Botaocustomizado type="primary" onClick={addTask}>
                add task
            </Botaocustomizado>
            {tasks.map((item) => {
                return <li>{item}</li>
            })}
        </Main>
    );
}

export default PAGETASKSLIST;