import { Link } from "react-router-dom";
import "./Main.css";
import { IoArrowBackSharp } from "react-icons/io5";

function Main(props) {
    return (
        <main className="Main_root">
            <div className="Main_Title">
                {props.returnTo && (
                    <Link to={props.returnTo}>
                        <IoArrowBackSharp />
                    </Link>
                )}

                <h2>{props.title}</h2>
            </div>

            {props.children}
        </main>
    );
}

export default Main;