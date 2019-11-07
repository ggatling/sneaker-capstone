import React from 'react';

import {Container} from 'react-bootstrap';

export const Layout = (props) => (
  <Container>
  {/* allows us to center the text on each page and limit overflow */}
    {props.children}
  </Container>
)
