import React from 'react'
import { useNavigate } from "react-router-dom";
import { Header, Input, Button } from 'semantic-ui-react'
import { Row, Col, Container } from 'react-bootstrap';

import Logo from '../../assets/Images/logo.svg'
import Eye from '../../assets/Images/eye.svg'

import './styles.scss'

const Home = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    var x = document.getElementById("password")
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const onSubmit = () => {
    navigate('/main');
  }

  return (
    <Container className='home-page'>
      <Row>
        <Col xs={12}>
          <div className='banner'>
            <img src={Logo} alt="logo" />
          </div>
          <Header as='h1'>Ronin Wallet</Header>
          <Header as='h5'>Your Digital Passport</Header>
          <div className='password'>
            <p className='password--label'>enter password</p>
            <Input action={{ icon: <img src={Eye} alt='' />, onClick: handleClick }} type='password' id='password' className='password--input primary-input' />
          </div>
          <Button className='primary-btn' content='Click Here' onClick={() => onSubmit()} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home