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

  componentDidMount() {
    try {
      const repositories = JSON.parse(localStorage.getItem('repositories')) || [];
      this.setState({ repositories });
    } catch (error) {
      this.setState({ repositoryError: true });
    }
  }

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
      repositories.push(repository);
      this.setState({
        repositories: [...repositories],
        repositoryInput: '',
        repositoryError: false,
      });

      localStorage.setItem('repositories', JSON.stringify(repositories));
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  removeRepository = (id) => {
    let { repositories } = this.state;
    repositories = repositories.filter(repository => repository.id !== id);
    this.setState({ repositories });
    localStorage.removeItem('repositories');
    localStorage.setItem('repositories', JSON.stringify(repositories));
  };

  updateRepository = async (id) => {
    this.setState({ loading: true });
    try {
      const { repositories } = this.state;
      let repository = repositories.find(repo => repo.id === id);
      const { data } = await api.get(`/repos/${repository.full_name}`);
      repository = { ...data };
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        repositories: [...repositories],
        repositoryInput: '',
        repositoryError: false,
      });

      localStorage.removeItem('repositories');
      localStorage.setItem('repositories', JSON.stringify(repositories));
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

        <CompareList
          repositories={repositories}
          removeRepository={this.removeRepository}
          updateRepository={this.updateRepository}
        />
      </Container>
    );
  }
}

export default Main;
