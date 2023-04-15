import "../style/Register.scss";
import { useState, useEffect } from "react";
import { loginUser, registerUser } from "../store/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function Register() {
  const { isLogin } = useSelector((state: any) => state.user);
  const dispatch: any = useDispatch();
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitRegister = (event: any) => {
    event.preventDefault();
    dispatch(
      registerUser({
        username: username,
        password: userPassword,
      })
    );
  };

  const navigateToLogin = ()=>{
    navigate("/")
  }

  return (
    <div className="container">
      <div className="card">
        <div className="title">Register</div>
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
          <button onClick={onSubmitRegister}>Submit</button>
          <small>
           Already have an account ? <span onClick={navigateToLogin}>Sign in</span>{" "}
          </small>
        </form>
      </div>
    </div>
  );
}
