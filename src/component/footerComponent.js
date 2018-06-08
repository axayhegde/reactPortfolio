import React, { Component } from 'react';
import styled from "styled-components";


const footer = styled.div`
    display: grid;
    grid-area: f;
    background: green;
    height: 100%;
    
`;

class Footer extends Component {
    render() {
        return (
            <footer>
                This is footer Component
            </footer>
        );
    }
}

export default Footer;
