import React, { Component } from 'react';
import styled from "styled-components";

const FooterT = styled.div`
        grid-column : 1 / -1;
        background : #AF3D4E;
`;

class Footer extends Component {
    render() {
        return (
            <FooterT>
                Ⓒ Akshay Hegde
            </FooterT>
        );
    }
}

export default Footer;
