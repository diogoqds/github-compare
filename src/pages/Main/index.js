import React, { Component } from 'react';
import moment from 'moment';
import { Container, Form } from './styles';
import logo from '../../assets/images/logo.png';
import CompareList from '../../components/CompareList';
import { api } from '../../services/api';

class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  handleRepositoryInput = (event) => {
    this.setState({ repositoryInput: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    try {
      const { repositoryInput, repositories } = this.state;
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositories: [...repositories, repository],
        repositoryInput: '',
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      repositories, repositoryInput, repositoryError, loading,
    } = this.state;

    return (
      <Container>
        <img src={logo} alt="github compare" />
        <Form withError={repositoryError} onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Digite um usuário ou repositório"
            value={repositoryInput}
            onChange={this.handleRepositoryInput}
          />

          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Buscar'}
          </button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}

export default Main;
