import React, { Component } from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/images/logo.png';
import CompareList from '../../components/CompareList';
import { api } from '../../services/api';

class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleRepositoryInput = (event) => {
    this.setState({ repositoryInput: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { repositoryInput, repositories } = this.state;
      const response = await api.get(`/repos/${repositoryInput}`);
      this.setState({
        repositories: [...repositories, response.data],
        repositoryInput: '',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { repositories, repositoryInput } = this.state;

    return (
      <Container>
        <img src={logo} alt="github compare" />

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Digite um usuário ou repositório"
            value={repositoryInput}
            onChange={this.handleRepositoryInput}
          />

          <button type="submit">Buscar</button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}

export default Main;
