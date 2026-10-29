import { useState } from 'react';
import Botaocustomizado from '../../komponenten/BotaoCustomizado/BotaoCustomizado';
import Main from '../../komponenten/Voornaamst/Main'
import CampoCustomizado from '../../komponenten/CampoCustomizado/CampoCustomizado';
import { IoTrashSharp } from "react-icons/io5";
import './PageTasksList.css'
import { SAVEONLOCALSTORAGE, SEARCHONLOCALSTORAGE } from '../../Services/localstorage.service';
import { toast, Zoom } from 'react-toastify';

function PAGETASKSLIST() {
    const [taskDescription, setTaskDescription] = useState("");
    const [tasks, setTasks] = useState(SEARCHONLOCALSTORAGE("tasks") || []);

    const addTask = () => {
        if(taskDescription.trim()) {
            const newTask = {
                id: Date.now(),
                description: taskDescription
            }
            const uptatedTasks = [...tasks, newTask];
            setTasks(uptatedTasks);
            setTaskDescription("");
            SAVEONLOCALSTORAGE("tasks", uptatedTasks);
            toast.success("task added", {theme: "colored", transition: Zoom})
        }else{
            toast.warn("OBRIGATORY FILL", {theme: "colored", transition: Zoom});
        }
    };

    const removeTask = (id) => {
        if(confirm("you'll remove this task, you sure question mark")){
            const uptatedTasks = tasks.filter((item) => item.id !== id);
            setTasks(uptatedTasks);
            SAVEONLOCALSTORAGE("tasks", uptatedTasks);
            toast.success("task removed", {theme: "colored", transition: Zoom})
        }
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
                return (
                    <div key={item.id} className='Pagetaskslist_item'>
                        <span>
                            <input type="checkbox" />
                            {item.description}
                        </span>
                        <IoTrashSharp color='black' onClick={() => removeTask(item.id)}/>
                    </div>
                )
            })}

            <span className='Pagetaskslist_span'>{!tasks.length && <span>no task registered</span>}</span>
        </Main>
    );
}

export default PAGETASKSLIST;