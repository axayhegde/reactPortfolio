import React, { Component } from 'react';
import styled from "styled-components";



const AboutMeT = styled.div`
    text-align: center;
    padding-top : 2em;
`;

const ImageStyle = styled.img`
    width : 20%;
    height : 20%;
    border-radius: 30%;
`;
const HeadingStyle = styled.div`
    font-size : 2em;
`;
const TextStyle = styled.p`
    
`;


class AboutMe extends Component {


    render() {
        return (
            <AboutMeT>
                <ImageStyle src={ require('../assets/image.jpg') } />
                <HeadingStyle>Akshay Hegde</HeadingStyle>
                <TextStyle>Hi there! This website was developed using React 16.4.0. If you would like to contact me, you can email me at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akshayheg@gmail.com" target="akshayheg@gmail.com">akshayheg@gmail.com</a>Or get in touch with me on <a href="https://www.linkedin.com/in/akshayheg/" target="https://www.linkedin.com/in/akshayheg/">Linkedin</a></TextStyle>
            </AboutMeT>
        );
    }
}

export default AboutMe;
