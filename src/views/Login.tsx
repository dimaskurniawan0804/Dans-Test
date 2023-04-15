import "../style/Login.scss";
import { useState, useEffect } from "react";
import { loginUser } from "../store/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function Login() {
  const { isLogin } = useSelector((state: any) => state.user);
  const dispatch: any = useDispatch();
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard");
    }
  }, [isLogin]);

  const onSubmitLogin = (event: any) => {
    event.preventDefault();
    dispatch(
      loginUser({
        username: username,
        password: userPassword,
      })
    );
  };

  const navigateToRegister = ()=>{
    navigate("/register")
  }

  return (
    <div className="container">
      <div className="card">
        <div className="title">Login</div>
        <form action="">
          <div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              onChange={(event) => {
                setUserPassword(event.target.value);
              }}
              value={userPassword}
            />
          </div>
          <button onClick={onSubmitLogin}>Submit</button>
          <small>
            Don't have account ? <span onClick={navigateToRegister}>Sign Up</span>{" "}
          </small>
        </form>
      </div>
    </div>
  );
}
