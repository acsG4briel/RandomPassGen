import { InputText, Label, WrapperInput, InputCheckbox } from "./InputInsercao.style";

const InputInsercao = ({label, type}) => {

    let input = <></>

    switch(type){
        case 'text':
            input = (
                <WrapperInput>
                    <Label>{label}</Label>
                    <InputText />
                </WrapperInput>
            )
            break;
        case 'checkbox':
            input = (
                <WrapperInput checkbox >
                    <InputCheckbox />
                    <Label checkbox >{label}</Label>
                </WrapperInput>
            )
            break;
        default:
            break;
    }



    return ( 
        input
    );
}

export default InputInsercao;