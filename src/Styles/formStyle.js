import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: "Roboto", sans-serif;
  > span {
    color: red;
  }
  h1 {
    font-size: 42px;
    color: white;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    font-family: "Ms Madi", cursive;
    text-align: center;
    cursor: pointer;
  }
  input {
    margin: 10px 0;
    height: 50px;
    width: 100%;
    outline: none;
    font-size: 20px;
    border-radius: 5px;
    background-color: #e8f0fe;
    border: none;
    color: #22223b;
    ::placeholder {
      color: #22223b;
    }
  }
  p {
    color: #f2e9e4;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    text-align: center;
  }
`;
export default FormStyle;
