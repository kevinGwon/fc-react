import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Row, Col, Input, Button } from "antd";
import {
  setBooks,
  outLoading,
  errorBooks,
  clearErrorBooks
} from "../reducers/books";
import { setUser } from "../reducers/user";

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

function Home({
  books,
  loadingBooks,
  errorBooks,
  user,
  runRequst,
  runAddBook
}) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const $bookInput = useRef();
  const [isLoading, setIsLoading] = useState(false);
  function onLogout({ token }) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToken(localStorage.removeItem("token"));
    }, 1000);
  }

  useEffect(() => {
    runRequst(token);
  }, [token, runRequst]);

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
                    <Button onClick={() => runAddBook(token)}>
                      리스트 등록
                    </Button>
                  </Col>
                </Row>
              </form>
            </MarginTop>
            <MarginTop>
              {}
              {!loadingBooks ? (
                <>로딩중..</>
              ) : (
                <ul>
                  {errorBooks !== null ? (
                    <li>데이터를 받아오는데 실패 했습니다</li>
                  ) : (
                    <>
                      {!books.length ? (
                        <li>등록된 리스트가 없습니다.</li>
                      ) : (
                        books.map(item => <li>{item.id}</li>)
                      )}
                    </>
                  )}
                </ul>
              )}
            </MarginTop>
          </Page>
        </>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  books: state.books.list,
  loadingBooks: state.books.isLoading,
  errorBooks: state.books.error
});

const mapDispatchToProps = dispatch => ({
  runRequst: token => {
    // user
    axios
      .get("https://api.marktube.tv/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        dispatch(
          setUser({
            name: res.data.name,
            email: res.data.email
          })
        );
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
        setBooks(res.data);
        dispatch(clearErrorBooks());
        setTimeout(() => {
          dispatch(outLoading());
        }, 1000);
      })
      .catch(error => {
        dispatch(errorBooks(error.response.status));
        setTimeout(() => {
          dispatch(outLoading());
        }, 1000);
      });
  },
  runAddBook: async token => {
    try {
      dispatch(clearErrorBooks());
      const res = await axios.post("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: ["test"]
      });
    } catch (error) {
      dispatch(errorBooks(error.response.status));
      setTimeout(() => {
        dispatch(outLoading());
      }, 1000);
    }
    // res.data.name = e.target.current.state.value;
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
