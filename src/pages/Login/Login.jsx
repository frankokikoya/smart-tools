import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchAndLoad, useAuth } from "../../hooks";
import { login } from "./services/login.service";
import { userSessionAdapter } from "../../adapters";

const Login = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [session, setSession] = useAuth();
  const navigate = useNavigate();

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("root@kikoya.io");
  const [password, setPassword] = useState("12345678");
  const [host, setHost] = useState("kikoya.io");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  useEffect(() => {
    session?.user && navigate("/");
  }, [session, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await callEndpoint(login({ email, password, host }));

      const userSession = userSessionAdapter(data);
      setSession(userSession);

      setEmail("");
      setPassword("");
      setHost("");
    } catch (error) {
      console.log("ERROR BACK", error);
    }
  };
  
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
            <pre>{JSON.stringify(session ? session : {})}</pre>
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
