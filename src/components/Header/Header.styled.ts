import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 0;
`;

export const Title = styled.h1`
    font-weight: bold;
`;

export const Favorites = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 5px;
    background-color: #77dde7;
    color: white;
    font-size: 20px;
    transition: background-color 0.3s;
    &:hover {
        background-color: #5ebfc9;
    }
    &:active {
        background-color: #5ebfc9;
    }
`;

export const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
`;
