import { useNavigate } from "react-router";
import { logout } from "../store/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { getJobList } from "../store/actions/jobActions";
import "../style/Dashboard.scss";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const {jobList} = useSelector((state:any)=>state.job)
  const dispatch: any = useDispatch();
  const test = () => {
    navigate("/");
    dispatch(logout());
  };
  const items = [1, 2, 3, 4, 5];
  const [isJobListLoaded, setIsJobListLoaded] = useState(false);
  useEffect(()=>{
    dispatch(getJobList())
  },[])
  useEffect(()=>{
    if(jobList.length > 0){
        setIsJobListLoaded(true)
    }
  },[jobList])
  return (
    <div id="dashboard">
      <div className="navbar">
        <p>Github <span>Jobs</span></p>
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
        {jobList.map((data:any, i:number) => {
          return (
            <div key={i} className="data">
              <div className="left">
                <p className="job-title">{data.title}</p>
                <p>
                  {data.company} - <span>{data.type}</span>
                </p>
              </div>
              <div className="right">
                <p>{data.location}</p>
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
