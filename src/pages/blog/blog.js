import React from "react";
import "./blog.css";
import title from "./blog-content";

const blog = () => {
  return (
    <div className="home">
      <div className="section">
        <h1>Blog</h1>
        <div className="row">
          <div className="card">
            <img src="assets/ai.jpg" alt="alt" />
            <p class="tag tag-red">Artificial Intelligence</p>
            <h3 className="header-1">Header Title</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'
            </p>
            <span><a href="#">Read</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
