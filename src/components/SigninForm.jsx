import React from "react";
import styled from "styled-components";
import { Col, Input, Button } from "antd";

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

function SigninFrom() {
  return (
    <Col span={12}>
      <Box>
        <Title>LOG IN. START SEARCHING.</Title>
        <form action="#">
          <InputGroup>
            <Label type="email" id="email" />
            <Input type="email" id="email" />
          </InputGroup>
          <InputGroup>
            <Label type="password" id="password" />
            <Input type="password" id="password" />
          </InputGroup>
          <Btn htmlType="submit">Sign in</Btn>
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
      </Box>
    </Col>
  );
}

export default SigninFrom;
