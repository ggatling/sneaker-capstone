import React from 'react';
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import styled from 'styled-components';
import royal from '../assets/royal.jpg';

const Styles = styled.div`
  .jumbo{
    background: url(${royal}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 350px;
    position: relative;
    z-index: -2;
  }

  .overlay{
    background-color: #000;
    opacity: 0.5  ;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Jumbotron = ()=>(
  <Styles>
    <Jumbo fluid className="jumbo">

      {/* grey overlay on the Home */}
      <div className="overlay"></div>
      <Container>
        <h1>Welcome to Closet Hype</h1>
      </Container>
    </Jumbo>
  </Styles>

)
