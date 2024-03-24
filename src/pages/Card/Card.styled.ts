import styled from "styled-components";

export const CardConteiner = styled.div`
    width: 1440px;
    height: 100%;
    padding: 50px 140px 50px 140px;
    display: flex;
    flex-direction: column;
`;

export const BackButton = styled.button`
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
`;