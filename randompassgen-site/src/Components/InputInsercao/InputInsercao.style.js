import styled from "styled-components";

export const WrapperInput = styled.div`
    margin-top: 15px;
    display: ${props => props.checkbox ? 'flex' : 'block'};
    align-items: ${props => props.checkbox ? 'center' : 'initial'};
    width: 100%;
`

export const Label = styled.p`
    color: rgba(217, 217, 217, 1);
    font-family: "Roboto Condensed", sans-serif;
    font-size: 12px;
    font-weight: normal;
    margin: 0px;
    text-align: left;
`

export const InputText = styled.input`
    background: transparent;
    border: 2px solid rgba(217, 217, 217, 1);
    outline: none;
    padding: 8px;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    caret-color: white;
    color: white;
`

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(217, 217, 217, 1);
    border-radius: 4px;
    outline: none;
    display: inline;
    cursor: pointer;

    &:checked {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 3.005L8 2.193z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
`