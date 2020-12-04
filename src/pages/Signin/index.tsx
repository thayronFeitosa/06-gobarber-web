import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Button from '../../components/button/index';
import Input from '../../components/input/index';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <Input name="E-mail" icon={FiMail} placeholder="E-mail" />
        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
        <Button name="button" type="submit"> Entrar </Button>
        <a href="forgot"> Esqueci minha senha </a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>

    </Content>
    <Background />
  </Container>
);

export default SignIn;
