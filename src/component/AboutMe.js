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
    overflow-y : auto;
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
                <h3>Work Experience</h3>
                <divStyled>
                    <h4>Software Developer - Nth Dimenzion</h4>
                    <pContent>
                        E-Commerce Mobile Application and Web Application

                        Worked as the sole developer developing the mobile application in Angular JS 1.6 using Ionic
                        Framework. FreshPlz is a end customer facing eCommerce application that is part of a large
                        eco-system of application whose reach spans right from farmers to the end consumers. Integrated
                        the application with the existing frameworks which was built on top of Apache Ofbiz ERP. Also
                        worked on the Web Application that was the website version of the mobile application which used
                        Free-marker templates as the front end.

                        NthDimenzion Website
                        Was also the sole developer responsible for the development of the NthDimenzion company website.
                        This was achieved using HTML, CSS, JQuery and JavaScript.
                    </pContent>
                    <br/>
                    <h4>Java Software Developer - TMX Finance Family of Companies</h4>
                    <p>
                        TMX Finance is the parent company to the brands TitleMax, TitleBucks, EquityAuto Loan, and InstaLoan. The company holds more than 1200 stores in thirteen states including Alabama, California, Florida, Georgia, Illinois, Mississippi, Missouri, Nevada, New Mexico, South Carolina, Tennessee, Texas and Virginia.
                        Developed software for the TMX Point of Sale (POS) web application project. Technologies used but not limited to: Java, JavaScript, Hibernate, Oracle, SQL/Stored Procedure.
                        Working as a part of core team in implementation of the business logic for company’s different store (TitleMax, Title Bucks, Instaloan) software which provides loan to customers on the basis of Automobiles as collateral.
                        Release Coordinator for releases.
                        Used Javascript for front end development of the website used for the stores.
                        Gained experience of Working in an Agile environment for the software development.
                        Technologies used but not limited to all above technologies with addition to Java 8, as well as a main contributor for technical updates to enhance the Payment processing.
                        Working with document service to auto and manual print certain auto populated documents
                        Integration of main codebase with other services to electronically signing the documents
                        Editing the documents for the anchor tags to sign them electronically
                        Working with docusign to view the envelops for the loan process.
                    </p>
                    <br/>
                    <h4>Technical Analysis Sr. Associate - Dell International Services</h4>
                    <p>
                        Security Administrator, Worked on PeopleTools 8.53 and PeopleSoft version 9.1/9.2 for The Carlyle Group
                        Provided production support on a high demanding work environment
                        Actively refreshed different environment databases
                        Migrated Projects over multiple environments
                        Worked with 3rd party applications such as Phire and ITSM.
                        Worked in an Agile Environment.
                    </p>
                    <br/>
                </divStyled>
            </AboutMeT>
        );
    }
}

export default AboutMe;
