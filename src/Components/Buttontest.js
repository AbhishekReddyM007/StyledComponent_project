import React from 'react';
import styled from "styled-components";

const ButtonText = styled.button`
    background-color: ${props => props.buttoncolor || 'green'};
    color: white;
    border-radius:20px;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 10px 20px;
    margin : 20px;
    height: fit-content;
`;
export default ButtonText;