import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #b7c08b;
    padding: 15px;
`;

export const ItemBox = styled.ul`
    list-style-type: none;
    padding: 0px;
`;

export const Tittle = styled(Link)`
    font-size:35px;
    text-decoration: none;
    color: #45474b;
    text-align:center;
`;

