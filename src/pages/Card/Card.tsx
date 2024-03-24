import { useParams } from "react-router-dom";
import * as S from "./Card.styled";
import Cat from "../../components/Interface";


const Card: React.FC<Cat> = ({
    id,
    breed,
    lifespan,
    temperament,
    origin,
    imageUrl,
    wikipedia_url,
}) => {
    const { catId } = useParams();


    return (
        <S.CardConteiner>
            <S.BackButton>Back</S.BackButton>
            <div>
                <img src={imageUrl} alt={breed} />
                <div>
                    <div>
                        <h2>{breed}</h2>
                    </div>
                    <p>
                        <strong>Lifespan:</strong> {lifespan}
                    </p>
                    <p>
                        <strong>Temperament:</strong> {temperament}
                    </p>
                    <p>
                        <strong>Origin:</strong> {origin}
                    </p>
                    <p>
                        <strong>wikipedia_url:</strong> {wikipedia_url}
                    </p>
                </div>
            </div>
        </S.CardConteiner>
    );
};

export default Card;
