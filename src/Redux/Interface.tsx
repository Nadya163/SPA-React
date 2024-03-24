import { catApi } from "../ApiService";

export interface RootState {
    cats: {
        cats: string[];
        likedCats: number[];
        showLiked: boolean;
    };
    [key: string]: unknown;
    catApi: typeof catApi;
}
