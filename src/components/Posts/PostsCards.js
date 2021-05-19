import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PostsCards.css';

import blogPosts from './PostsData';

const PostsCards = () => {
  return (
    <div>
      <div className={styles.header_container}>
        <h2 className={styles.title_container}>Blog Posts</h2>
      </div>
      <div className="container">
        <div className="row">
          {blogPosts.map((blogPost) => (
            <div className="col-md-4" key={blogPost.id}>
              <Link to={`posts/${blogPost.id}`}>
                <img
                  className={styles.image}
                  src={blogPost.image}
                  alt={blogPost.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsCards;
