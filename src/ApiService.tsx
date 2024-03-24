import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catApi = createApi({
    reducerPath: "catApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.thecatapi.com/v1" }),
    tagTypes: ["Cat"],
    endpoints: (builder) => ({
        getCatBreeds: builder.query({
            query: () => "/breeds",
            providesTags: ["Cat"],
        }),
        getCatImage: builder.query({
            query: (breedId) => `/images/search?breed_id=${breedId}`,
        }),
    }),
});

export const { useGetCatBreedsQuery, useGetCatImageQuery } = catApi;
