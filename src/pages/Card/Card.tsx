/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./Card.styled";
import { Cat } from "../../components/Interface";
import { useSelector } from "react-redux";
import { catsSelector } from "../../Redux/CatsSlice";

const Card: React.FC<Cat> = () => {
    const navigate = useNavigate();
    const { id: catId } = useParams();
    const cats = useSelector(catsSelector);
    const cat: Cat = cats.find((cat: any) => cat.id === catId);
    console.log(cat);

    const handleBackClick = () => {
        navigate("/");
    };

    return (
        <S.CardConteiner>
            <S.BackButton onClick={handleBackClick}>Back</S.BackButton>
            <S.CardItem>
                <S.CatImg src={cat.imageUrl} alt={cat.breed} />
                <div>
                    <div>
                        <S.BreedText>{cat.breed}</S.BreedText>
                    </div>
                    <S.CatText>
                        <strong>Lifespan:</strong> {cat.lifespan}
                    </S.CatText>
                    <S.CatText>
                        <strong>Temperament:</strong> {cat.temperament}
                    </S.CatText>
                    <S.CatText>
                        <strong>Origin:</strong> {cat.origin}
                    </S.CatText>
                    <S.CatText>
                        <strong>Wikipedia:</strong>{" "}
                        <a
                            href={cat.wikipedia_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {cat.wikipedia_url}
                        </a>
                    </S.CatText>
                </div>
            </S.CardItem>
        </S.CardConteiner>
    );
};

export default Card;
