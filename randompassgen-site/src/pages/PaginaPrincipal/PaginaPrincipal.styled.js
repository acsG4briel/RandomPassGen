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

export const HeaderTabela = styled.div`
    margin: 0px;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 40px;
    color: #E8EBE8;
    font-weight: normal;
`;

export const TabelaWrapper = styled.div`
`;

export const HeaderTabelaWrapper = styled.div`
    display: flex;
`;

export const TabelaInternaWrapper = styled.div`
    border: solid 5px #E8EBE8;
`;