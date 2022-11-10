import styled from "styled-components";

export const StyledPopupButton = styled.button`
    font-size: 1.2rem;
    padding: .2rem .7rem;
    margin-left: .5rem;
    color: white;
    background-color: grey;
    border: .1rem solid white;
    border-radius: 50%;

    &:hover {
        color: grey;
        background-color: white;
        border: .1rem solid grey;
    }

    &:active {
        color: white;
        background-color: grey;
    }
`;