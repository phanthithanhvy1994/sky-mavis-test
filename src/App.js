import React from 'react';
import { Routes , Route, BrowserRouter } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap';

import Home from './components/home'
import Main from './components/main'
import Send from './components/send'

import './App.css';

function App() {
  return (
     <div className="main-page">
            <Container fluid>
              <Row>
                <Col xs={12}>
                <BrowserRouter>
                 <Routes >
                    <Route exact path="/sky-mavis-test" element={<Home/>} />
                    <Route exact path="/main" element={<Main/>} />
                    <Route exact path="/send" element={<Send/>} />
                  </Routes >
                  </BrowserRouter>
                </Col>
              </Row>
            </Container>
    </div>
  );
}

export default App;
