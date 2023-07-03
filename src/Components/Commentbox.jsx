import React from 'react';

const Commentbox = () => {
  return (
    <div>
      <h2>Leave a Comment</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your Comment"></textarea>
      </div>
    </div>
  );
};

export default Commentbox;
