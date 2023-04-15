import "../style/Login.scss";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const onSubmitLogin = (event:any)=>{
    event.preventDefault()
    console.log(event)
    console.log(username,userPassword)
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
            <input type="password" onChange={(event) => {
                setUserPassword(event.target.value);
              }} value={userPassword} />
          </div>
          <button onClick={onSubmitLogin}>Submit</button>
          <small>
            Don't have account ? <span>Sign Up</span>{" "}
          </small>
        </form>
      </div>
    </div>
  );
}
