import { useState } from "react";
import * as S from "./Cards.styled";
import { useDispatch, useSelector } from "react-redux";
import { likeCatSelector, removeCat, setLikeCat } from "../../Redux/CatsSlice";
import Cat from "./../Interface";

const CatCard: React.FC<Cat> = ({
    id,
    breed,
    lifespan,
    temperament,
    origin,
    imageUrl,
    wikipedia_url,
}) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);
    const favoriteCat = useSelector(likeCatSelector);

    const handleLikeClick = () => {
        const isLiked = favoriteCat.find((cat: Cat) => cat.id === id);
        if (isLiked) {
            const updatedLikeCat = favoriteCat.filter(
                (cat: Cat) => cat.id !== id,
            );
            dispatch(setLikeCat(updatedLikeCat));
        } else {
            const updatedLikeCat = [
                ...favoriteCat,
                {
                    id,
                    breed,
                    lifespan,
                    temperament,
                    origin,
                    imageUrl,
                    wikipedia_url,
                },
            ];
            dispatch(setLikeCat(updatedLikeCat));
        }
        setLiked(!isLiked);
    };

    const handleDeleteClick = () => {
        dispatch(removeCat(id));
    };

    return (
        <S.Cards>
            <S.CatImg src={imageUrl} alt={breed} />
            <div>
                <S.NameBreed>
                    <h2>{breed}</h2>
                    <div>
                        <S.LikeImg
                            src={
                                liked
                                    ? "./icons8-лайк-с-заливкой-100 (1).png"
                                    : "./icons8-лайк-с-заливкой-100.png"
                            }
                            onClick={handleLikeClick}
                        />
                        <S.LikeImg
                            src="./icons8-удалить-100.png"
                            onClick={handleDeleteClick}
                        />
                    </div>
                </S.NameBreed>
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
        </S.Cards>
    );
};
export default CatCard;
