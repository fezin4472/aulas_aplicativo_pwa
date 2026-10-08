import "./Main.css";

function Main(props) {
    return (
        <main className="Main_root">
            <h2>{props.titulo}</h2>
            
            {props.children}
        </main>
    );
}

export default Main;