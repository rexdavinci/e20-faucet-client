import React, { useState } from 'react';
import { FormI } from './components';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [hash, setHash] =  useState('')
  return (
    <Container>
      <FormI toast={toast} setHash={setHash} hash={hash}/>
      <ToastContainer />
    </Container>
  );
}

export default App;
