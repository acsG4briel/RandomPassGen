import { FooterContainer, HeaderContainer, HeaderLabel, PaginaContainer } from "./PaginaPrincipal.styled";

const PaginaPrincipal = () => {
    return (
      <PaginaContainer>
          <HeaderContainer >
            <HeaderLabel>RANDOM PASS GEN</HeaderLabel>
          </HeaderContainer>
  
          <div class="Body" > 
  
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
  
            <div class="Insercao">
              <h1>NOVA SENHA</h1>
  
              <p>Valor</p>
              <input />
  
              <p>Origem</p>
              <input></input>
  
              <p>Senha aleatória</p>
              <input type='checkbox'></input>
  
              <button>SALVAR</button>
            </div>

          </div>

          <FooterContainer />
      </PaginaContainer>
    );
  }
  
  export default PaginaPrincipal;