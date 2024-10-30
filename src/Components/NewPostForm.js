// NewPostForm.js
import React, { useState } from "react";
import "./Feed.css";

const NewPostForm = ({ onCreatePost }) => {
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null); 

  const handleSubmit = () => {
    onCreatePost(newPostContent, newPostImage); 
    setNewPostContent(""); 
    setNewPostImage(null);  
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); 
      setNewPostImage(imageUrl); 
    }
  };

  return (
    <div className="new-post">
      <textarea
        placeholder="What's on your mind?"
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      />
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange}
      />
      <button onClick={handleSubmit}>Post</button>

    </div>
  );
};

export default NewPostForm;
