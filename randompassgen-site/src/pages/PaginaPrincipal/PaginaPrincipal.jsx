import BoxInsercao from "../../Components/BoxInsercao/BoxInsercao";
import ButtonExportar from "../../Components/ButtonExportar/ButtonExportar";
import HeaderPaginaPrincipal from "../../Components/HeaderPaginaPrincipal/HeaderPaginaPrincipal";
import { ConteudoWrapper, HeaderTabela, HeaderTabelaWrapper, PaginaContainer, TabelaInternaWrapper, TabelaWrapper } from "./PaginaPrincipal.styled";

const PaginaPrincipal = () => {
    return (
      <PaginaContainer>
          <HeaderPaginaPrincipal label={"RANDOM PASS GEN"} />
          <ConteudoWrapper> 
            <BoxInsercao />
  
            <TabelaWrapper>

              <HeaderTabelaWrapper >
                <HeaderTabela>MINHAS SENHAS</HeaderTabela>
                <ButtonExportar />
              </HeaderTabelaWrapper>

              <TabelaInternaWrapper>
                <table>
                  <tr>
                    <th>Origem</th>
                    <th>Senha</th>
                    <th>Criptografia</th>
                    <th>Outras ações</th>
                  </tr>
                </table>
              </TabelaInternaWrapper>
              
            </TabelaWrapper>

          </ConteudoWrapper>
      </PaginaContainer>
    );
  }
  
  export default PaginaPrincipal;