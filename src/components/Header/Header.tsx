import { useDispatch } from "react-redux";
import * as S from "./Header.styled";
import { toggleShowLiked } from "../../Redux/CatsSlice";
import { useState } from "react";

function Header() {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);

    const handleFilterClick = () => {
        dispatch(toggleShowLiked());
        setIsActive((prevState) => !prevState);
    };
    return (
        <S.Header>
            <S.HeaderTitle>
                <img src="./icons8-кот-100.png" alt="Paw" />
                <S.Title>SPA React </S.Title>
            </S.HeaderTitle>
            <S.Favorites
                onClick={handleFilterClick}
                style={{ backgroundColor: isActive ? "#5ebfc9" : "#77dde7" }}
            >
                Favorites
            </S.Favorites>
        </S.Header>
    );
}

export default Header;
