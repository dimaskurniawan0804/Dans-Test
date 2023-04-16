import { useNavigate } from "react-router";
import { logout } from "../store/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { getJobList, getJobDetail, getJobByQuery } from "../store/actions/jobActions";
import { useState, useEffect } from "react";
import "../style/Dashboard.scss";

export default function Dashboard() {
  const navigate = useNavigate();
  const { jobList } = useSelector((state: any) => state.job);
  const { jobDetail } = useSelector((state: any) => state.job);
  const dispatch: any = useDispatch();
  const [filter, setFilter] = useState({
    description: "",
    location: "",
    type: "",
  });
  const [pageNumber, setPageNumber] = useState(1)

  // mounted
  useEffect(() => {
    dispatch(getJobList(pageNumber.toString()));
  }, [pageNumber]);



  const getDetailById = async (id: string) => {
    const data = await dispatch(getJobDetail(id));
    if (Object.keys(data.payload).length > 0) {
      navigate("/job-detail");
    }
  };

  const onSearch = async ()=>{
    const data = await dispatch(getJobByQuery(filter))
  }

  return (
    <div id="dashboard">
      <div className="navbar">
        <p>
          Github <span>Jobs</span>
        </p>
      </div>
      <div className="filter-area">
        <div className="input">
          <label htmlFor="">Job Description</label>
          <input
            type="text"
            name=""
            id=""
            value={filter.description}
            onChange={(event) =>
              setFilter({ ...filter, description: event.target.value })
            }
          />
        </div>
        <div className="input">
          <label htmlFor="">Location</label>
          <input
            type="text"
            name=""
            id=""
            value={filter.location}
            onChange={(event) =>
              setFilter({ ...filter, location: event.target.value })
            }
          />
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            checked={filter.type === "full"}
            onChange={(event) =>
              setFilter({
                ...filter,
                type: event.target.checked ? "full" : "",
              })
            }
          />
          <label htmlFor="">Full Time Only</label>
        </div>
        <div className="button-wrapper">
          <button onClick={onSearch}>Search</button>
        </div>
      </div>
      <div className="content">
        <div className="header">Job List</div>
        {jobList.map((data: any, i: number) => {
          return (
            <div key={i} className="data">
              <div className="left">
                <p className="job-title" onClick={() => getDetailById(data.id)}>
                  {data.title}
                </p>
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
          <button onClick={()=>setPageNumber(pageNumber+1)}>More Jobs</button>
        </div>
      </div>
    </div>
  );
}
