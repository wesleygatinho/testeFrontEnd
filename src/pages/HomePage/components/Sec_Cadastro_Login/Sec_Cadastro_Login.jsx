import { useState } from "react";
import "./sec_Cadastro_Login.css";
import { MaxContainer } from "./../../../../components/MaxContainer/MaxContainer";
import Button from "../../../../components/Button/Button";
import Axios from 'axios';
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Sec_Cadastro_Login = () => {
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');


  const handleClickLogin = (values) => {
    Axios.post("https://teste-back-9wlt.vercel.app/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      if (response.data.msg === "Usuário logado com sucesso") {
        localStorage.setItem("authenticated", "true"); 
        alert('Logado com sucesso')
        window.location.reload(); 
      } else {
        setLoginError(response.data.msg);
      }
    });
  }


  const handleClickRegister = (values) => {
    Axios.post("https://teste-back-9wlt.vercel.app/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      if (response.data.msg === "Cadastrado com sucesso") {
        setLoginError('Cadastrado com sucesso');
      } else {
        setRegisterError(response.data.msg);
      }
    });
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
    password: yup.string().min(8, "Senha deve conter 8 caracteres").required("Este campo é obrigatório"),
  })

  const validationRegister = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
    password: yup.string().min(8, "Senha deve conter 8 caracteres").required("Este campo é obrigatório"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais!")
  })

  return (
    <section id='sec-cadastro-login'>
      <MaxContainer>
        <div className='content'>

          <h2>Cadastre-se</h2>
          <Formik
            initialValues={{}}
            onSubmit={handleClickRegister}
            validationSchema={validationRegister}>
            <Form className='form-form'>
              <div className='div-inputs'>
                <Field
                  name='email'
                  type='email'
                  className='input input-user'
                  placeholder='E-mail'
                />
                <ErrorMessage component="span"
                  name="email"
                  className="form-error" />
              </div>
              <div className='div-inputs'>
                <Field
                  name='password'
                  type='password'
                  className='input input-user'
                  placeholder='Senha' />
                <ErrorMessage component="span"
                  name="password"
                  className="form-error" />
              </div>
              <div className='div-inputs'>
                <Field
                  name='confirmpassword'
                  type='password'
                  className='input input-user'
                  placeholder='Confirme sua senha' />
                <ErrorMessage component="span"
                  name="confirmpassword"
                  className="form-error" />
              </div>
              {registerError && <div className='login-error'>{registerError}</div>}
              <Button botao="CADASTRAR" />
            </Form>
          </Formik>
          <div className="or-container">
            <div className="line"></div>
            <h2 className="or-text">OU</h2>
            <div className="line"></div>
          </div>
          <h2>Login</h2>
          <Formik
            initialValues={{}}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}>
            <Form className='form-form'>
              <div className='div-inputs'>
                <Field
                  name='email'
                  type='email'
                  className='input input-user'
                  placeholder='E-mail'
                />
                <ErrorMessage component="span"
                  name="email"
                  className="form-error" />
              </div>
              <div className='div-inputs'>
                <Field
                  name='password'
                  type='password'
                  className='input input-user'
                  placeholder='Senha' />
                <ErrorMessage component="span"
                  name="password"
                  className="form-error" />
              </div>
              {loginError && <div className='login-error'>{loginError}</div>}
              <p className='texto'>
                Esqueceu a senha? Clique <a href=''>aqui</a>
              </p>
              <Button botao="LOGIN" />
            </Form>
          </Formik>
        </div>
      </MaxContainer>
    </section>
  );
};
