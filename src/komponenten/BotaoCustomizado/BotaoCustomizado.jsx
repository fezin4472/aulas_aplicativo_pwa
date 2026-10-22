import "./BotaoCustomizado.css";

function Botaocustomizado(props) {
    const classes = ["Botaocustomizado_root"];

    switch(props.type) {
        case "primary":
            classes.push("Botaocustomizado_primary");
            break;
        case "secondary":
            classes.push("Botaocustomizado_secondary")
            break;
        default:
            break;
    }

    return (
        <button className={classes.join(" ")} onClick={props.onClick}>
                <span>{props.children}</span>
        </button>
    );
}

export default Botaocustomizado;