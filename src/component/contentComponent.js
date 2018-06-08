import React, { Component } from 'react';
import styled from "styled-components";


const content = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto 60px;
    background: blue;
    height: 100%;
    
`;

class Content extends Component {
    render() {
        return (
            <content>
                This is Content Component
            </content>
        );
    }
}

export default Content;
