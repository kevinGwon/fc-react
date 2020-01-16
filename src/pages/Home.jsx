import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Row, Col, Input, Button } from "antd";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10vh;
  width: 50%;
  margin: auto;
  text-align: center;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  width: 50%;
  margin: auto;
  text-align: center;
`;

const MarginTop = styled.div`
  margin-top: 5rem;
`;

function Home() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState([]);
  const [user, setUser] = useState({});
  const $bookInput = useRef();

  function onLogout({ token }) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToken(localStorage.removeItem("token"));
    }, 1000);
  }

  const onAddBook = async e => {
    try {
      const res = await axios.post("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: ["test"]
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    // res.data.name = e.target.current.state.value;
  };

  useEffect(() => {
    // user
    axios
      .get("https://api.marktube.tv/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        setUser({
          name: res.data.name,
          email: res.data.email
        });
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    // book
    axios
      .get("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        setBook(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {!token ? (
        <Page>
          <Link to="/Signin">로그인 페이지로 이동</Link>
        </Page>
      ) : (
        <>
          <Header>
            <MarginTop>
              <div>
                {user.name}({user.email}) 회원님은 로그인 중입니다.
              </div>
              <Button htmlType="button" loading={isLoading} onClick={onLogout}>
                Logout
              </Button>
            </MarginTop>
          </Header>
          <Page>
            <MarginTop>
              <form action="#">
                <Row span="6">
                  <Col span={20}>
                    <Input
                      type="text"
                      placeholder="제목을 입력하세요"
                      ref={$bookInput}
                    />
                  </Col>
                  <Col span={4}>
                    <Button onClick={onAddBook}>리스트 등록</Button>
                  </Col>
                </Row>
              </form>
            </MarginTop>
            <MarginTop>
              <ul>
                {!book.length ? (
                  <li>등록된 리스트가 없습니다.</li>
                ) : (
                  book.map(item => <li>{item.id}</li>)
                )}
              </ul>
            </MarginTop>
          </Page>
        </>
      )}
    </>
  );
}

export default withRouter(Home);
