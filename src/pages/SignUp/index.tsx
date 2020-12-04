import React from 'react';
import { FiLogIn, FiMail, FiUser, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';
import Button from '../../components/button/index';
import Input from '../../components/input/index';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça o seu cadastro</h1>
        <Input name="Name" icon={FiUser} placeholder="Nome" />
        <Input name="E-mail" icon={FiMail} placeholder="E-mail" />
        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
        <Button type="submit"> Cadastrar </Button>
      </form>
      <a href="login">
        <FiLogIn />
        Voltar para logon
      </a>

    </Content>
  </Container>
);

export default SignUp;
