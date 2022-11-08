import { StyledCustomButton } from "./CustomButton.styled";

function CustomButton(props) {

    const [click, setClick] = props.stateProps;

    const increment = () => setClick(click + 1);
    const decrement = () => click > 0 ? setClick(click - 1) : setClick(0);

    return (
        <div>
            <StyledCustomButton onClick={increment}>+</StyledCustomButton>
            <input type="text" name={props.name} value={click} onChange={props.onchange} />
            <StyledCustomButton onClick={decrement}>-</StyledCustomButton>
        </div>
    );
}

export default CustomButton;