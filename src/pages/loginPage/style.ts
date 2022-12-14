import styled from "styled-components";

const LoginWrapper = styled.div`
  .layer {
    background-color: var(--neutral-light);
    min-height: 100vh;
  }

  .boxform {
    display: flex;
    justify-content: center;
  }

  .hero {
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .forgot p {
    margin-top: 8px;
    font-size: 12px;
    font-style: italic;
  }

  .forgot span {
    text-decoration: underline;
    color: blue;
    cursor: pointer;
  }

  .formContainer {
    min-width: 400px;
    margin-top: 100px;
    position: relative;
    z-index: 999;
    padding: 35px 30px;
    background: rgba(255, 255, 255, 0.04);
    -webkit-box-shadow: -1px 4px 28px 0px rgb(0 0 0 / 25%);
    -moz-box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.25);
    box-shadow: -1px 4px 28px 0px rgb(0 0 0 / 25%);
    margin-bottom: 20px;
  }

  Input {
    border: 1px solid var(--dark-primary);
    font-size: 13px;
    color: var(--dark-primary);
    &:hover {
      border: 1px solid var(--dark-primary);
    }
  }
  .optlogin {
    display: flex;
    justify-content: center;
    gap: 15px;
    span {
      font-size: 35px;
    }
  }

  .textopt {
    p {
      margin-top: 15px;
      text-align: center;
      font-size: 15px;
    }
  }

  label {
    margin-top: 20px;
    font-size: 14px;
    margin-bottom: 2px;
  }

  .btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    span {
      margin-left: 8px;
      margin-top: 8px;
    }
  }
  .text {
    text-align: center;
    margin-top: 40px;
    font-size: 13px;
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 425px) {
    .formContainer {
      margin-top: 120px;
      margin-bottom: 40px;
      min-width: 300px;
    }
    .btn {
      display: flex;
      justify-content: flex-start;
      margin-top: 15px;
    }
  }
  @media screen and (max-width: 375px) {
    .formContainer {
      margin-top: 50px;
      margin-bottom: 30px;
      min-width: 300px;
    }
  }
`;
export default LoginWrapper;

export const ButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 0.4rem 2rem;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  /* min-width: 64px; */
  &:disabled {
    background-color: #cccccc;
  }
  @media screen and (max-width: 425px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;
