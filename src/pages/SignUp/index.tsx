import React, { useCallback } from 'react';
import {
  FiLogIn, FiMail, FiUser, FiLock,
} from 'react-icons/fi';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import Button from '../../components/button/index';
import Input from '../../components/input/index';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object({
        name: Yup.string().required('your name is required'),
        email: Yup.string().required('your email is required').email(),
        password: Yup.string().min(6, 'at least 6 characters'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>  Faça o seu cadastro </h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit"> Cadastrar </Button>
        </Form>
        <a href="login">
          <FiLogIn />
          Voltar para logon
        </a>

      </Content>
    </Container>
  );
};

export default SignUp;
