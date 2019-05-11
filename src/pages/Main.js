import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 16px;
    color: #444;
    border-radius: 3px;
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b8;
    color: #fff;
    border: 0;
    font-size: 18px;
    border-radius: 3px;
    font-weight: bold;

    &:hover {
      background: #52d89f;
    }
  }
`;

const Main = () => (
  <Container>
    <img src={logo} alt="github compare" />

    <Form>
      <input type="text" placeholder="Digite um usuário ou repositório" />

      <button type="submit">Buscar</button>
    </Form>
  </Container>
);

export default Main;
