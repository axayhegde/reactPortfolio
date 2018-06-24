import React, {Component} from 'react';
import styled from "styled-components";
import {keyframes} from "styled-components";
import * as firebase from 'firebase';
import './HomeComponent.css';
import Particles from 'react-particles-js';

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

const HomeT = styled.div`
        height:100vh;
        animation: ${rotate360} 0.5s linear;
`;


class Home extends Component {

    constructor() {
        super();

        this.state = {
            name: 'Loading from FireBase...'
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('name');
        rootRef.on('value', snap => {
            console.log('db stuff', snap.val());
            this.setState({
                name: snap.val()
            });
        });
    }

    render() {
        return (
            <HomeT>
                <Particles
                    params={{
                        particles: {
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#FFFFF",
                                    blur: 5
                                },
                                color: "#000000"
                            },
                            number: {
                                    value: 100
                            },
                        }
                    }}
                    height={ "100vh" }

                ></Particles>
                    <main>
                        <div className="intro">Hello, I'm Akshay!</div>
                        <div className="tagline">Full Stack Developer | Photographer</div>
                        <div className="icons-social">
                            <a target="www.github.com/axayhegde" href="https://github.com/axayhegde"><i
                                className="fab fa-github"></i></a>
                            <a target="https://www.linkedin.com/in/akshayheg/"
                               href="https://www.linkedin.com/in/akshayheg/"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </main>
            </HomeT>
        );
    }
}

export default Home;
