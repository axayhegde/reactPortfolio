import React, {Component} from 'react';
import styled, {keyframes} from "styled-components";

const rotate360 = keyframes`
  from {
    -webkit-transform: scale(0.5);
  }

  to {
    -webkit-transform: scale(1);
  }
`;

const AboutMeT = styled.div`
    text-align: center;
    padding-top : 2em;
    animation: ${rotate360} 0.2s linear;
    
`;

const ImageStyle = styled.img`
    width : 20%;
    height : 20%;
    border-radius: 30%;
`;
const HeadingStyle = styled.div`
    font-size : 2em;
`;
const divStyled = styled.div`
    border: 1px solid black;
`;

const pContent = styled.p`
    text-align : justify;
    text-align-last: center;
    color : red;
`;

class AboutMe extends Component {


    render() {
        return (
            <AboutMeT>
                <ImageStyle src={require('../assets/image.jpg')}/>
                <HeadingStyle>Akshay Hegde</HeadingStyle>
                <p>Hi there! This website was developed using React 16.4.0. If you would like to contact me, you can
                    email me at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akshayheg@gmail.com"
                                   target="akshayheg@gmail.com">akshayheg@gmail.com</a>. Or get in touch with me on <a
                        href="https://www.linkedin.com/in/akshayheg/"
                        target="https://www.linkedin.com/in/akshayheg/">Linkedin</a></p>
                <br/>
            </AboutMeT>
        );
    }
}

export default AboutMe;
