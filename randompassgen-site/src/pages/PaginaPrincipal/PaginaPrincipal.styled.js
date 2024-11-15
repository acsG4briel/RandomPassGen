import styled from 'styled-components';

export const PaginaContainer = styled.div`
    margin: 0px;
    background-color: rgba(40, 34, 34, 1);
    height: 100vh;
`

export const ConteudoWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 6fr;
    gap: 50px;
    margin: 50px;
    margin-top: 20px;
`

//Adicionar efeito na borda
export const InsercaoWrapper = styled.div`
    text-align: center;
    border: solid 5px #E8EBE8;
    padding: 25px;
    width: 80%;
`

export const HeaderLabel = styled.h1`
    font-family: "Roboto Condensed", sans-serif;
    color: #E8EBE8;
    margin: 0px;
`