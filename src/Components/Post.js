// Post.js
import React, { useState } from "react";
import "./Feed.css";

const Post = ({ post, onLike, onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  
  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      onAddComment(commentText);
      setCommentText(""); 
    }
  };

  return (
    <div className="post">
      <h4>{post.userName}</h4>
      <p>{post.content}</p>

      {/* Display the image if it exists */}
      {post.image && (<img src={post.image} alt="Post" className="post-image" />)}

      <div className="post-actions">
        <button onClick={onLike}>
          <i className={post.likedByUser ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i> 
          {post.likes}
        </button>
      </div>

      {/* Comment section */}
      <div className="comments">
        {post.comments.map((comment, index) => (
          <p key={index} className="comment">
            {comment}
          </p>
        ))}

        {/* Add Comment */}
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        /><br /><br />
        <button onClick={handleCommentSubmit}>Comment</button>
      </div>
    </div>
  );
};

export default Post;
