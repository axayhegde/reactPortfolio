import React, { Component } from 'react';
import styled, {keyframes} from "styled-components";


const rotate360 = keyframes`
  from {
    scale:0;
    -webkit-transform: scale(0.5);
  }

  to {
    scale:1;
    -webkit-transform: scale(1);
  }
`;

const AboutMeT = styled.div`
        height : 100%;
        background : #ef9a9a;
        animation: ${rotate360} 0.5s linear;
`;



class AboutMe extends Component {

    componentWillMount() {

    }

    render() {
        return (
            <AboutMeT>
                This is About Me!
            </AboutMeT>
        );
    }
}

export default AboutMe;
