import React, { useEffect, useState } from 'react';
import Card from '../Card/Card.js';
import images from '../../assets/images/bookstack.jpeg';
import styles from './About.css';
import PostsData from '../Posts/PostsData';
import { Link } from 'react-router-dom';

const getRandomPost = () =>
  PostsData[Math.floor(Math.random() * (PostsData.length - 1))];

const about = () => {
  const [blogPost, setBlogPost] = useState(getRandomPost());

  useEffect(() => {
    const interval = setInterval(() => {
      setBlogPost(getRandomPost());
    }, 30 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.feature_container}>
        <h4 className={styles.header}>Featured Blog Post</h4>
        <div>
          <div className={styles.link_container}>
            <Link to={`posts/${blogPost.id}`} className={styles.flex_container}>
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className={styles.image_container}
              />
            </Link>
            <div className={styles.flex_container}>
              <h6 className={styles.description_container}>
                "{blogPost.title}" by {blogPost.author}
              </h6>
              <p>{blogPost.summary.substring(0, 300)}...</p>
              <Link to={`posts/${blogPost.id}`}>See More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.about_container}>
        <Card
          title="Welcome to Bailey's Blog!"
          body1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ante dapibus risus lobortis interdum. Nam risus eros, ullamcorper id arcu a, convallis dapibus nisl. Etiam vulputate pharetra diam, sit amet luctus libero sollicitudin vitae. Integer lacus metus, pretium quis suscipit nec, mollis sit amet velit. Suspendisse purus arcu, accumsan dapibus libero at, dignissim posuere leo. Vivamus eu volutpat velit, nec accumsan ipsum. Suspendisse sit amet malesuada nunc."
          body2="Sed sapien urna, euismod interdum nunc a, iaculis porttitor augue. Aliquam posuere feugiat arcu et eleifend. Phasellus feugiat neque finibus diam fringilla facilisis. Phasellus vitae congue nisi. Mauris hendrerit massa eros, sed pharetra erat vulputate eu. Morbi placerat purus ac aliquam pretium. In efficitur tincidunt fermentum. Phasellus vitae ante nibh. Pellentesque tempor ornare dui, ut ullamcorper nulla ullamcorper a. Mauris elementum condimentum est quis posuere. Quisque posuere nibh arcu, vel blandit mi iaculis vitae. Pellentesque augue lorem, malesuada feugiat suscipit eget, ornare eget felis. Ut pharetra vel massa vel faucibus. Aliquam blandit, leo et tristique sagittis, elit odio dignissim orci, non commodo lacus leo a ex. Maecenas massa velit, efficitur a suscipit sit amet, hendrerit vel mi."
          body3="Aenean tempus rutrum venenatis. Proin id efficitur elit. Sed efficitur commodo dui, id pretium lorem fermentum ut. Nullam lacinia, dolor quis blandit egestas, magna leo pharetra lacus, vel interdum lectus orci dignissim tellus. Vestibulum iaculis maximus felis, eu sollicitudin nisl dictum non. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi fringilla est eget ultrices tempor. Proin interdum lacus ac sollicitudin eleifend. Duis ac erat non turpis tempor aliquet vitae dignissim dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu placerat neque. Sed sed dolor ornare elit consectetur semper nec in ex. Curabitur sit amet orci elit."
          imageUrl={images}
        />
      </div>
    </div>
  );
};

export default about;
