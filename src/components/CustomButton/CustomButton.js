import { StyledCustomButton } from "./CustomButton.styled";

function CustomButton(props) {

    const [click, setClick] = props.stateProps;
    console.log(props.stateProps);

    return (
        <div>
            <button onClick={() => setClick(click + 1)}>+</button>
            <input type="text" name={props.name} value={click} onChange={props.onchange} />
            <button onClick={() => setClick(click - 1)}>-</button>
        </div>
    );
}

export default CustomButton;
