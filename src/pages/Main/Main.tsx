import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./Main.styled";
import {
    catsSelector,
    likeCatSelector,
    setCats,
    showLikedSelector,
} from "../../Redux/CatsSlice";
import { getCatBreeds, getCatImage } from "../../Api";
import Header from "../../components/Header/Header";
import CatCard from "../../components/Cards/Cards";
import Cat from "./../../components/Interface";

const Main: React.FC = () => {
    const dispatch = useDispatch();
    const cats = useSelector(catsSelector);
    const showLiked = useSelector(showLikedSelector);
    const likeCat = useSelector(likeCatSelector);

    useEffect(() => {
        getCatBreeds().then((catData) => {
            const loadedCatData: Cat[] = [];
            catData.slice(0, 12).forEach((cat: Cat) => {
                getCatImage(cat.id)
                    .then((image) => {
                        loadedCatData.push({ ...cat, imageUrl: image });
                        if (loadedCatData.length === 12) {
                            dispatch(setCats([...loadedCatData]));
                        }
                    })
                    .catch((error) => {
                        console.error("Error fetching cat image:", error);
                    });
            });
        });
    }, []);

    const filteredCats = showLiked ? likeCat : cats;

    return (
        <div>
            <Header />
            <S.CardsConteiner>
                {filteredCats.length === 0 ? (
                    <S.FavoriteText>No favorite cats yet.</S.FavoriteText>
                ) : (
                    filteredCats.map((cat: Cat) => (
                        <CatCard key={cat.id} {...cat} />
                    ))
                )}
            </S.CardsConteiner>
        </div>
    );
};

export default Main;
