import { HeaderContainer, HeaderLabel } from "./HeaderPaginaPrincipal.styled";

const HeaderPaginaPrincipal = ({label}) => {
    return (
        <HeaderContainer>
            <HeaderLabel>{label}</HeaderLabel>
          </HeaderContainer>
    );
}

export default HeaderPaginaPrincipal;