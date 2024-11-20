import styled from "styled-components";

export const WrapperButton = styled.div`
    text-align: end;
    padding-top: 15px;
`;

export const Button = styled.button`
    height: 30px;
    width: 120px;
    font-weight: bold;
    border-radius: 5px;
    background-color: rgba(163, 154, 154, 1);
    color: rgba(255, 255, 255, 1);
    border: none;

    transition: 0.3s;
    cursor: pointer;
    &:hover {
        background-color: rgba(99, 99, 99, 1);
    }
`;