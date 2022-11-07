import { StyledCustomButton } from "./CustomButton.styled";

function CustomButton(props) {

    const [click, setClick] = props.stateProps;

    const increment = (e) => {
        e.preventDefault();
        setClick(click + 1);
    }

    const decrement = (e) => {
        e.preventDefault();
        click > 0 ? setClick(click - 1) : setClick(0);
    }

    return (
        <div>
            <StyledCustomButton onClick={(e) => increment(e)}>+</StyledCustomButton>
            <input type="text" name={props.name} value={click} onChange={props.onchange} />
            <StyledCustomButton onClick={(e) => decrement(e)}>-</StyledCustomButton>
        </div>
    );
}

export default CustomButton;
