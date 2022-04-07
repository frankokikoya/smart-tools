import React, { useState, useRef, useEffect } from "react";
import { useFetchAndLoad, useAuth } from "../../hooks";
import { login } from "./services/login.service";
import { userSessionAdapter } from "../../adapters";

const SESSION = {
  accessToken: null,
  user: {
    id: 1,
    name: "Franko",
    email: "oznama27@gmail.com",
    role: {
      id: 1,
      type: 1,
      privileges: [],
    },
  },
};

const Login = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [session, setSession] = useAuth();

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("oznama27@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { accessToken },
      } = await callEndpoint(login({ email, password }));

      SESSION.accessToken = accessToken;
      const userSession = userSessionAdapter(SESSION);
      setSession(userSession);

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("ERROR BACK", error);
    }
  };
  // useAsync(getUser, userAdapter, () => {}, []);
  // { email: "oznama27@gmail.com", password: "12345678" }
  return (
    <>
      {loading ? (
        <div>
          <h3>LOADING</h3>
        </div>
      ) : (
        <>
          <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <pre>{JSON.stringify(session)}</pre>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
              <button>Sign In</button>
            </form>
            {/* <p>
              Need an Account?
              <br />
              <span className="line">
                <Link to="/register">Sign Up</Link>
              </span>
            </p> */}
          </section>
        </>
      )}
    </>
  );
};

export default Login;
