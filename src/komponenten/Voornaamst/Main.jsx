import { Link } from "react-router-dom";
import "./Main.css";

function Main(props) {
    return (
        <main className="Main_root">
            {props.returnTo && <Link to={props.returnTo}>{"<"}</Link>}
            
            <h2>{props.title}</h2>
            
            {props.children}
        </main>
    );
}

export default Main;