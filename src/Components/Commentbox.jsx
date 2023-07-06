import React from 'react';
import '../Styles/Commentbox.css'
const Commentbox = () => {
  return (
    <div className="comment1-box">
      <h2>Leave a Comment</h2>
      <div className="form1-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Your Comment"></textarea>
      </div>
      <button className="post-button">Post Comment</button>
    </div>
  );
};

export default Commentbox;
