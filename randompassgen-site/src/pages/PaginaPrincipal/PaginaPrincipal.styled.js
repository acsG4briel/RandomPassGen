import styled from 'styled-components';

export const PaginaContainer = styled.div`
    margin: 0px;
    background-color: #608284;
    height: 100vh;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #304D56;
    height: 100px;
    width: 100%;
`

export const HeaderPrincipalLabel = styled.h1`
    display: flex;
    margin: 0 auto;
    font-family: "Roboto Condensed", sans-serif;
    color: #E8EBE8;
`

export const ConteudoWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 6fr;
    gap: 50px;
    margin: 50px;
`

//Adicionar efeito na borda
export const InsercaoWrapper = styled.div`
    text-align: center;
    border: solid 2px #E8EBE8;
    padding: 25px;
    border-radius: 10px;
    width: 80%;
`

export const HeaderLabel = styled.h1`
    font-family: "Roboto Condensed", sans-serif;
    color: #E8EBE8;
`