// Feed.js
import React, { useState } from "react";
import Post from "./Post";
import NewPostForm from "./NewPostForm";
import "./Feed.css";
import img1 from './Images/img11.jpg';
import img2 from './Images/img13.png';
import img3 from './Images/img17.jpg';
import img4 from './Images/img6.jpg';
import img5 from './Images/img3.jpg';
import img6 from './Images/img4.jpg';

const Feed = () => {
  const [posts, setPosts] = useState([

    {
        id: 1,
        userName: "Kabilesh",
        content: "Hello, this is my first post!",
        likes: 16,
        likedByUser: false,
        comments: ["Nice post!"],
        image: img1 
      },

      {
        id: 2,
        userName: "Krishna",
        content: "Loving this new social media app!",
        likes: 99,
        likedByUser: false,
        comments: ["Interesting!"],
        image: img2 
      },

      {
        id: 3,
        userName: "Santhosh",
        content: "Loving this new social media app!",
        likes: 125,
        likedByUser: false,
        comments: [],
        image: img3 
      },

      {
        id: 4,
        userName: "Merlin",
        content: "Loving this new social media app!",
        likes: 44,
        likedByUser: false,
        comments: [],
        image: img4 
      },

      {
        id: 5,
        userName: "Jack",
        content: "Loving this new social media app!",
        likes: 25,
        likedByUser: false,
        comments: [],
        image: img5 
      },

      {
        id: 6,
        userName: "Prakash",
        content: "Loving this new social media app!",
        likes: 89,
        likedByUser: false,
        comments: [],
        image: img6 
      },


  ]);

  const [sortBy, setSortBy] = useState("none");


  const handleCreatePost = (content, image) => {
    if (content.trim() || image) { 
      const newPost = {
        id: posts.length + 1,
        userName: "New User", 
        content,
        likes: 0,
        likedByUser: false,
        comments: [],
        image 
      };
      setPosts([newPost, ...posts]); 
    }
  };

  

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            likes: post.likedByUser ? post.likes - 1 : post.likes + 1, 
            likedByUser: !post.likedByUser 
          }
        : post
    ));
  };


  const handleAddComment = (postId, comment) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === "likes") {
      return b.likes - a.likes; 
    } else if (sortBy === "comments") {
      return b.comments.length - a.comments.length; 
    }
    return 0;
  });

  return (

    <div className="feed">
      <h2>Social Media Feed</h2>

      
      <div className="post-and-sort">
        <NewPostForm onCreatePost={handleCreatePost} />
        
    
        <div className="sort-options">
          <label>Sort by: </label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="none">None</option>
            <option value="likes">Likes</option>
            <option value="comments">Comments</option>
          </select>
        </div>
      </div><br/>

      
      {sortedPosts.map(post => (
        <Post
          key={post.id}
          post={post}
          onLike={() => handleLike(post.id)}
          onAddComment={(comment) => handleAddComment(post.id, comment)}
        />
      ))}

    </div>
  );
};

export default Feed;
