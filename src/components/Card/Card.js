import React from 'react';
import styles from './Card.css';

const Card = (props) => {
  const { imageUrl, title, body1, body2, body3 } = props;
  return (
    <div className={styles.card_container}>
      <div className={styles.title_container}>
        <h3 className={styles.card_title}>{title}</h3>
      </div>
      <div className={styles.image_container}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={styles.card_content}>
        <div className={styles.body_container}>
          <p className={styles.body_paragraph}>{body1}</p>
          <p className={styles.body_paragraph}>{body2}</p>
          <p className={styles.body_paragraph}>{body3}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
