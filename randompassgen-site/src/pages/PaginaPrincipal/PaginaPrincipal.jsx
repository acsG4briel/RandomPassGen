import BoxInsercao from "../../Components/BoxInsercao/BoxInsercao";
import HeaderPaginaPrincipal from "../../Components/HeaderPaginaPrincipal/HeaderPaginaPrincipal";
import { ConteudoWrapper, PaginaContainer } from "./PaginaPrincipal.styled";

const PaginaPrincipal = () => {
    return (
      <PaginaContainer>
          <HeaderPaginaPrincipal />
          <ConteudoWrapper> 
            <BoxInsercao />
  
            <div class="Tabela">
              <table>
                <tr>
                  <th>Origem</th>
                  <th>Senha</th>
                  <th>Criptografia</th>
                  <th>Outras ações</th>
                </tr>
              </table>
            </div>

          </ConteudoWrapper>
      </PaginaContainer>
    );
  }
  
  export default PaginaPrincipal;