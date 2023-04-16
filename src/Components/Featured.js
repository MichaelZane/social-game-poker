import React from 'react';
import { Container } from 'react-bootstrap';
import Tournaments from './Tournaments';

export default function Featured() {

  return (
    <Container className='d-flex justify-content-center align-items-center flex-column' >
      <h1>Sign up for tournaments</h1>
    <Container className='d-flex justify-content-center align-items-center' >
      <Tournaments />
    </Container>
      
    </Container>
  );
}
