/* eslint-disable no-unused-vars */
import { useState } from "react";
import * as S from "./Cards.styled";
import { useDispatch, useSelector } from "react-redux";
import { likeCatSelector, removeCat, setLikeCat } from "../../Redux/CatsSlice";
import { Cat } from "./../Interface";
import { Link } from "react-router-dom";

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

    const handleLikeClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
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

    const handleDeleteClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        dispatch(removeCat(id));
    };

    return (
        <Link
            to={`card/${id}`}
            style={{ textDecoration: "none", color: "#000000" }}
        >
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
                        <strong>Origin:</strong> {origin}
                    </p>
                </div>
            </S.Cards>
        </Link>
    );
};
export default CatCard;
