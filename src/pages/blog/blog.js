import React from "react";
import "./blog.css";
import blogDetails from './blogDetails';
import { Link } from "react-router-dom";
import title from "./blog-content";

  

const blog = () => {
  return (
    <div className="home">
      <div className="section">
        {/* <h1>Blog</h1> */}
        <div className="row">
          {title.map((d) => (
            <div className="card">
            <img className="imago1" src={d.image} alt="alt" />
            <p className="tag tag-red">{d.tag}</p>
            <h3 className="header-1">{d.header}</h3>
            <p className="para">
              {d.paragraph}
            </p>
            <span><Link to="/blogDetails">Read</Link></span>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default blog;
