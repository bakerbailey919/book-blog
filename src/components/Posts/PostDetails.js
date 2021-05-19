import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../Comments/CommentForm';
import Comments from '../Comments/Comments';

import styles from './PostDetails.css';

import blogPosts from './PostsData';

const posts = () => {
  const [comments, setComments] = useState([]);
  const [isCommenting, setIsCommenting] = useState(false);
  const params = useParams();

  const blogPost = blogPosts.find(
    (post) => post.id.toString() === params.postId
  );

  const saveCommentHandler = (commentData) => {
    setComments((prevComments) => [
      ...prevComments,
      { ...commentData, id: Math.random().toString() },
    ]);
    setIsCommenting(false);
  };

  return (
    <div>
      <div className={styles.title_container}>{blogPost.title}</div>
      <div className={styles.author_container}>{blogPost.author}</div>
      <div className={styles.genre_container}>{blogPost.genre}</div>
      <img
        className={styles.image_container}
        src={blogPost.image}
        alt={blogPost.title}
      ></img>
      <div className={styles.post_content}>{blogPost.summary}</div>
      <button
        onClick={() => setIsCommenting(true)}
        className={styles.comment_button}
      >
        Leave a Comment
      </button>
      {isCommenting && (
        <div className={styles.comment_container}>
          <CommentForm onSaveCommentData={saveCommentHandler} />
        </div>
      )}
      <div className={styles.comment_container}>
        <Comments commentData={comments} />
      </div>
    </div>
  );
};

export default posts;
