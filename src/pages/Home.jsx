import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

function Home() {
  return (
    <Page>
      <Link to="/Signin">로그인 페이지로 이동</Link>
    </Page>
  );
}

export default Home;
