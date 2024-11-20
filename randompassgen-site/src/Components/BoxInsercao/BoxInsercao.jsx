import ButtonSalvar from "../ButtonSalvar/ButtonSalvar";
import InputInsercao from "../InputInsercao/InputInsercao";
import { HeaderLabel, InsercaoWrapper } from "./BoxInsercao.styled";

const BoxInsercao = () => {
    return(
        <InsercaoWrapper>
              <HeaderLabel>NOVA SENHA</HeaderLabel>
  
              <InputInsercao label={"ORIGEM"} type='text' />
  
              <InputInsercao label={"LOGIN"} type='text' />

              <InputInsercao label={"SENHA"} type='text' />

              <InputInsercao label={"GERAR SENHA ALEATÓRIA"} type='checkbox' />

              <InputInsercao label={"SALVAR SENHA CRIPTOGRAFADA"} type='checkbox' />

              <ButtonSalvar />
            </InsercaoWrapper>
    );
}

export default BoxInsercao;