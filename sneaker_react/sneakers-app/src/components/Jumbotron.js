import React from 'react';
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import styled from 'styled-components';
import jordan_jumbo from '../assets/jordan_jumbo.jpg';

const Styles = styled.div``;

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
