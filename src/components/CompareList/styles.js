import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 250px;
  border-radius: 3px;
  margin: 0 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }
    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

  div.buttons {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    #remove {
      background: #f00;
      color: white;
    }

    #update {
      background: yellow;
      color: white;
    }

    #remove,
    #update {
      border: 0;
      width: 40%;
      height: 30px;
      font-size: 15px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
