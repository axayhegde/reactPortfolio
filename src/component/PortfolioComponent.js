import React, {Component} from 'react';
import styled from "styled-components";
import {keyframes} from "styled-components";
const rotate360 = keyframes`
  from {
    -webkit-transform: scale(0.5);
  }

  to {
    -webkit-transform: scale(1);
  }
`;

const PortfolioT = styled.div`

        display: grid;
        grid-template-columns : 1fr 1fr;
        height : 100vh;
        background : white;
        animation: ${rotate360} 0.2s linear;
        overflow: auto;
        grid-gap : 10px;
        box-shadow : 5px;
        
`;
const StyledCard = styled.div`
        display: grid;
        grid-template-columns : 1fr 1fr;
        background : white;
        padding-left : 2em;
        padding-top : 1em;
        border-radius : 5px;
        background : white;
`;
const RepoNameStyle = styled.div`
        font-size : 1em;
        color : black;
`;
const LearnMoreStyle = styled.div`
        font-size : 1em;
        text-align : center;
        color : white;
`;


class Portfolio extends Component {

    constructor() {
        super();
        this.state = {
            data: [],

        };

    }

    componentWillMount() {
        fetch('https://api.github.com/users/axayhegde/repos?per_page=all')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    data: json,
                });
            });
    }


    render() {
        return (
            <PortfolioT>
                {this.state.data.map((repo) => {
                    return (
                        <StyledCard>
                            <RepoNameStyle>
                                {repo.name}
                            </RepoNameStyle>
                            <LearnMoreStyle>
                                <a href={repo.html_url} size="small">Learn More</a>
                            </LearnMoreStyle>
                        </StyledCard>
                    )
                })}
            </PortfolioT>
        );
    }
}

export default Portfolio;
