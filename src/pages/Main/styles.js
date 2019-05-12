import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 16px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #f00' : 0)};
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
