import React from "react";
import "./blog.css";
import title from "./blog-content";

  

const blog = () => {
  return (
    <div className="home">
      <div className="section">
        {/* <h1>Blog</h1> */}
        <div className="row">
          {title.map((d) => (
            <div className="card">
            <img src={d.image} alt="alt" />
            <p className="tag tag-red">{d.tag}</p>
            <h3 className="header-1">{d.header}</h3>
            <p>
              {d.paragraph}
            </p>
            <span><a href="#">Read</a></span>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default blog;
