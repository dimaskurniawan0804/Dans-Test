import { useNavigate } from "react-router";
import { logout } from "../store/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import "../style/Dashboard.scss";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const test = () => {
    navigate("/");
    dispatch(logout());
  };
  const items = [1, 2, 3, 4, 5];
  return (
    <div id="dashboard">
      <div className="navbar">
        <p>Github Jobs</p>
      </div>
      <div className="filter-area">
        <div className="input">
          <label htmlFor="">Job Description</label>
          <input type="text" name="" id="" />
        </div>
        <div className="input">
          <label htmlFor="">Location</label>
          <input type="text" name="" id="" />
        </div>
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Full Time Only</label>
        </div>
        <div className="button-wrapper">
          <button>Search</button>
        </div>
      </div>
      <div className="content">
        <div className="header">Job List</div>
        {items.map((data, i) => {
          return (
            <div className="data">
              <div className="left">
                <p className="job-title">Data Engineer</p>
                <p>
                  Trade Public - <span>Full Time</span>
                </p>
              </div>
              <div className="right">
                <p>Berlin</p>
                <p>1 day ago</p>
              </div>
            </div>
          );
        })}
      <div className="more-jobs">
        <button>More Jobs</button>
      </div>
      </div>
    </div>
  );
}
