import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";

import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Sidebar
 **/

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div
      className="sidebarContainer"
      style={{
        width: props.width,
      }}
    >
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img
            src="https://frenchriviera.travel/wp-content/uploads/2018/09/Museum-of-Modern-and-Contemporary-Art2-800x600.jpg"
            alt=""
          />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            The RalyMuseum is unique in bringing together under one roof the
            cultures of the world, spanning continents and oceans. You can
            contact us via email (info@ralymuseum.ca)
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Gallery</span>
        </div>

        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
