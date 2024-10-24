import React from "react";
import styled from "styled-components";

const ImageFpo = styled.div`
    width: 160px;
    height: 180px;
    background-color: ${props => props.imagecolor || '#0097D0'};
    margin : 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 20px;
`;
export default ImageFpo;
