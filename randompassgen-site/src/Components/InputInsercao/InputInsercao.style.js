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
`

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(217, 217, 217, 1);
    border-radius: 4px;
    outline: none;
    display: inline;
`