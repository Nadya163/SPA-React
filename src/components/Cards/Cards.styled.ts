import styled from "styled-components";

export const Cards = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
    background: rgb(255, 255, 255);
`;

export const CatImg = styled.img`
    width: 300px;
    height: 250px;
`;

export const LikeImg = styled.img`
    width: 40px;
    cursor: pointer;
`;

export const NameBreed = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
`;
