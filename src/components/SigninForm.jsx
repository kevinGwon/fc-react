import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Col, Input, Button, message } from "antd";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2rem;
`;

const LineBox = styled.div`
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid gray;
`;

const Title = styled.strong`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  text-align: center;
`;

const Necessary = styled.span`
  color: red;
`;

const Btn = styled(Button)`
  margin-top: 2rem;
`;

const InputGroup = styled.div`
  margin-top: 1rem;
`;

const LinkGroup = styled.div`
  position: relative;
  padding: 1rem 0;

  a {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Label = props => (
  <label htmlFor={props.id}>
    {props.type}
    <Necessary>*</Necessary>
  </label>
);

const Link = props => {
  return (
    <Button as="a" href={props.href}>
      {props.children}
    </Button>
  );
};

function SigninFrom({ history }) {
  const emailInput = useRef();
  const pwInput = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  function onLogout() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.removeItem("token");
      setToken(localStorage.getItem("token"));
      history.push("/");
    }, 1000);
  }

  const onGetInfo = async () => {
    const email = emailInput.current.state.value;
    const password = pwInput.current.state.value;

    try {
      setIsLoading(true);
      const response = await axios.post("https://api.marktube.tv/v1/me", {
        email,
        password
      });
      setTimeout(() => {
        setIsLoading(false);
        // console.log(response);
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        history.push("/");
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      message.error(error.response.data.error);
    }
  };

  return (
    <Col span={12}>
      <Box>
        <Title>LOG IN. START SEARCHING.</Title>
        {!token ? (
          <>
            <form action="#">
              <InputGroup>
                <Label type="email" id="email" />
                <Input type="email" id="email" ref={emailInput} />
              </InputGroup>
              <InputGroup>
                <Label type="password" id="password" />
                <Input
                  type="text"
                  id="password"
                  ref={pwInput}
                  autoomplete="password"
                />
              </InputGroup>
              <Btn htmlType="button" loading={isLoading} onClick={onGetInfo}>
                Sign in
              </Btn>
            </form>
            <LineBox>
              <LinkGroup>
                Need to create an account?
                <Link href="/">Sign Up</Link>
              </LinkGroup>
              <LinkGroup>
                Forgot your password?
                <Link href="/">RECOVERY</Link>
              </LinkGroup>
            </LineBox>
          </>
        ) : (
          <>
            <div>반값습니다 회원님</div>
            <Btn htmlType="button" loading={isLoading} onClick={onLogout}>
              Logout
            </Btn>
          </>
        )}
      </Box>
    </Col>
  );
}

export default withRouter(SigninFrom);
