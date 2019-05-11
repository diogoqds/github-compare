import React from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/images/logo.png';
import CompareList from '../../components/CompareList';

const Main = () => (
  <Container>
    <img src={logo} alt="github compare" />

    <Form>
      <input type="text" placeholder="Digite um usuário ou repositório" />

      <button type="submit">Buscar</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;
