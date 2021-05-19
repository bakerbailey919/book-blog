import React from 'react';

import styles from './Comments.css';

const Comments = (props) => {
  const { commentData } = props;

  return (
    <div>
      {commentData.map((comment) => (
        <div className={styles.comment_form} key={comment.id}>
          <p>{`${comment.firstName} ${comment.lastName} on ${comment.submittedDate}`}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
