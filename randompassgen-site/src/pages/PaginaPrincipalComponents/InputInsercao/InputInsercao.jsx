import { WrapperInput } from "./InputInsercao.style";

const InputInsercao = ({label}) => {

    return (
        <WrapperInput>
            <p>{label}</p>
            <input />
        </WrapperInput>
    );
}

export default InputInsercao;