import * as S from "./App.styled";
import AppRoute from "./routers";

const App: React.FC = () => {
    return (
        <S.Wrapper>
            <S.Conteiner>
                <AppRoute />
            </S.Conteiner>
        </S.Wrapper>
    );
};

export default App;
