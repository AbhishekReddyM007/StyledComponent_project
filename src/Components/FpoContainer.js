import React from "react";
import styled from "styled-components";

const FpoContainer = styled.div`
    width:813px;
    height:228px;
    background-color:${props => props.containercolor || "#B7FFFA"};
    border-radius:10px;
    padding: 24px 28px 24px 28px;
    margin : 0px auto;
    border: ${props => props.bordercolor || "#0097D0"} solid;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom:20px;
    
`;
export default FpoContainer;