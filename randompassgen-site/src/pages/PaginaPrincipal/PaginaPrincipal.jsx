import InputInsercao from "../PaginaPrincipalComponents/InputInsercao/InputInsercao";
import { ConteudoWrapper, HeaderContainer, HeaderLabel, HeaderPrincipalLabel, InsercaoWrapper, PaginaContainer } from "./PaginaPrincipal.styled";

const PaginaPrincipal = () => {
    return (
      <PaginaContainer>
          <HeaderContainer >
            <HeaderPrincipalLabel>RANDOM PASS GEN</HeaderPrincipalLabel>
          </HeaderContainer>
  
          <ConteudoWrapper> 

          <InsercaoWrapper>
              <HeaderLabel>NOVA SENHA</HeaderLabel>
  
              <InputInsercao label={"Valor"} />
  
              <InputInsercao label={"Origem"} />
  
              <p>Senha aleatória</p>
              <input type='checkbox'></input>
  
              <button>SALVAR</button>
            </InsercaoWrapper>
  
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