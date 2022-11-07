import styled from "styled-components";

export const StyledCustomButton = styled.button`
    font-size: 1.4rem;
    color: white;
    background-color: #f67754;
    padding: .2rem .6rem;
    margin: .3rem;
    border: .1rem solid #f67754;
    border-radius: .5rem;

    &:hover {
        color: #f67754;
        background-color: white;
    }

    &:active {
        color: white;
        background-color: #f67754;
    }
`;