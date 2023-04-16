import "../style/JobDetail.scss";
import { useNavigate } from "react-router";
import { logout } from "../store/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { getJobList, getJobDetail } from "../store/actions/jobActions";
import { useState, useEffect } from "react";
import arrowBack from "../assets/arrow-back.svg"

const job = {
    description: "<p>Car Registration, Inc.</p><br/><p>Car Registration, Inc. (CRI) provides comprehensive, online vehicle registration and titling services for consumers who desire or need a DMV alternative.  Currently licensed and bonded under the California DMV’s Business Partner Automation program, CRI successfully processes over 250,000 transactions per year while reducing wait times and allowing the CA DMV to reallocate its resources to other services and administrative tasks.  With CRI, customers can get same-day processing, next-day delivery, and comprehensive telephone and email support.  Through its website, CRI collects fees from vehicle owners, transmits fees to the DMV in real-time, and issues registration cards and stickers to the customer via USPS or express courier.</p><br/<p>Job Description<br/CRI is a leader in providing consumers direct access to DMV services through our online technology. We provide customers the ability to skip the line at the DMV by using our online platform to renew, replace, or transfer their vehicle registration and title. You will join a small but profitable start-up with the ability to shape and grow our software. We are looking for a self-motivated software architect/developer who is comfortable working on a cloud-based full-stack built with Go, PHP, and JavaScript for both customer-facing and internal applications. In your role, you will join a small team of software developers to build new software, new features, and maintain existing functionality.</p><br/<p>This is a full-time remote position with a competitive salary and benefits including medical, dental, vision, 401K plan, and more. We are based in Elk Grove, CA. Though you won’t work in the office, we regularly communicate via Slack and Google Meets. Our annual holiday party is fun and inclusive and offers a great opportunity to catch up with the team in person.</p><br/<p>Skills &amp; Requirements<br/●\tAbility to design and implement solutions to both frontend and backend problems from a non-technical specification into a finished feature<br/●\t3+ years professional coding with Go, PHP, Python, Ruby, or another server-side scripting language<br/●\t2+ years professional coding with JavaScript<br/●\t3+ years professional experience with SQL database design (PostgreSQL, MySQL, Oracle, or MSSQL)<br/●\tExperience integrating RESTful and/or gRPC APIs<br/●\tExperience with DevOps practices including infrastructure as code, continuous integration, monitoring, and logging<br/●\tComfortable developing in a Mac or Linux environment<br/●\tFamiliarity with event-based functional architectures<br/●\tFamiliarity with MVC or MVVM architectures<br/●\tSecurity-conscious best practices in any software built<br/●\tTeam lead experience</p><br/<p>Desirable Qualifications<br/●\t1+ year professional coding with the Go language<br/●\tExperience with cloud-based distributed systems on providers such as AWS<br/●\tExperience with docker or container technologies<br/●\tExperience with CDNs<br/●\tExperience developing web-based business applications with complex workflows<br/●\tDatabase administration experience including setting up and maintaining replication servers<br/●\tBachelor’s degree, preferably in Computer Science or related discipline</p><br/<p>If you are interested, please send your resume to <a href=\"mailto:Jobs@carregistration.com\">Jobs@carregistration.com</a>.</p><br/<p>CANDIDATES only, please.</p><br/<p>Equal Opportunity Employer<br/CRI is an equal opportunity employer to all, regardless of age, ancestry, color, disability (mental and physical), exercising the right to family care and medical leave, gender, gender expression, gender identity, genetic information, marital status, medical condition, military or veteran status, national origin, political affiliation, race, religious creed, sex (includes pregnancy, childbirth, breastfeeding, and related medical conditions), and sexual orientation.</p><br/<p>It is an objective of CRI to achieve a drug-free workplace. Any applicant for employment will be expected to behave in accordance with this objective.</p><br/",
}

export default function JobDetail() {
    const navigate = useNavigate()
    const {jobDetail} = useSelector((state:any)=>state.job)
  return (
    <div id="jobDetail">
      <div className="navbar">
        <p>
          Github <span>Jobs</span>
        </p>
      </div>
      <div className="back" onClick={()=> navigate("/dashboard")}>
        <img src={arrowBack} alt="" />
        <p>Back</p>
      </div>
      <div className="content-wrapper">
      <div className="content">
        <div className="header">
          <p>{jobDetail.type} / {jobDetail.location}</p>
          <p>{jobDetail.title}</p>
        </div>
        <div className="data">
          <div className="left">
            <p dangerouslySetInnerHTML={{ __html: jobDetail.description }}></p>
          </div>
          <div className="right">
            <div className="company-info">
                <div className="name">
                    <p>{jobDetail.company}</p>
                    <p>1 Other Job</p>
                </div>
                <div className="image">
                    <img src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg" alt="" />
                    <a href={jobDetail.company_url}>{jobDetail.company_url}</a>
                </div>
            </div>
            <div className="apply">
                <p className="how-to-apply">How to Apply</p>
            <p className="content" dangerouslySetInnerHTML={{ __html: jobDetail.how_to_apply }}></p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
