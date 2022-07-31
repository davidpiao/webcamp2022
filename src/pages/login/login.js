import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../components/context/AuthProvider";
import { Link } from "react-router-dom";

import axios from "../../components/api/axios";
import "./login.css";
import Register from "./register";

const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("서버 응다 없음");
      } else if (err.response?.status === 400) {
        setErrMsg("이메일 혹은 비밀번호를 입력하세요");
      } else if (err.response?.status === 401) {
        setErrMsg("권한이 없습니다");
      } else {
        setErrMsg("로그인 실패!");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>로그인 되었습니다.</h1>
          <br />
          <p>
            <a href="#">뒤로가기</a>
          </p>
        </section>
      ) : (
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="login-wrapper">
                <section>
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <br></br>
                  <h1>로그인</h1>
                  <br></br>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="username" className="email"></label>
                      <input
                        type="text"
                        placeholder="이메일"
                        className="mail"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                      />
                    </div>
                    <div className="second-input">
                      <label htmlFor="password" className="email"></label>
                      <input
                        type="password"
                        id="password"
                        placeholder="비밀번호"
                        className="mail"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                      />
                    </div>
                    <div className="login-button">
                      <button>로그인</button>
                    </div>
                  </form>
                  <p>
                    <br></br>
                    회원이 아니신가요?
                    <br />
                    <div></div>
                    <span className="line">
                      <Link
                        to="/movies/register"
                        style={{ textDecoration: "none" }}
                      >
                        <span>회원가입</span>
                      </Link>
                      {/* <a href="#">회원가입</a> */}
                    </span>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
