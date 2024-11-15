import HeaderPaginaPrincipal from "../PaginaPrincipalComponents/HeaderPaginaPrincipal/HeaderPaginaPrincipal";
import InputInsercao from "../PaginaPrincipalComponents/InputInsercao/InputInsercao";
import { ConteudoWrapper, HeaderLabel, InsercaoWrapper, PaginaContainer } from "./PaginaPrincipal.styled";

const PaginaPrincipal = () => {
    return (
      <PaginaContainer>

          <HeaderPaginaPrincipal />

          <ConteudoWrapper> 

          <InsercaoWrapper>
              <HeaderLabel>NOVA SENHA</HeaderLabel>
  
              <InputInsercao label={"ORIGEM"} type='text' />
  
              <InputInsercao label={"LOGIN"} type='text' />

              <InputInsercao label={"SENHA"} type='text' />

              <InputInsercao label={"GERAR SENHA ALEATÓRIA"} type='checkbox' />

              <InputInsercao label={"SALVAR SENHA CRIPTOGRAFADA"} type='checkbox' />

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