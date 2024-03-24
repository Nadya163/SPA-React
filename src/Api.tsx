const apiKey =
    "live_Rjk0u2GsofYXRAUTuGxm7W1gSbBpW9Nqq4M8iGsfTj1oJHgCwybTVtJqNdSrLGvl";

const getCatBreeds = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await response.json();
    const catData = data.map((cat: any) => ({
        id: cat.id,
        breed: cat.name,
        lifespan: cat.life_span,
        temperament: cat.temperament,
        origin: cat.origin,
        wikipedia_url: cat.wikipedia_url,
        image: cat.url,
    }));
    return catData;
};

const getCatImage = async (breedId: number) => {
    const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}&breed_id=${breedId}`,
    );
    const data = await response.json();
    return data && data.length > 0 ? data[0].url : "";
};

export { getCatBreeds, getCatImage };
