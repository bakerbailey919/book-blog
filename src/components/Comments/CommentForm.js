import React, { useState } from 'react';
import moment from 'moment';

import styles from './CommentForm.css';

const CommentForm = (props) => {
  const { onSaveCommentData } = props;

  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredComment, setEnteredComment] = useState('');

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const commentData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      comment: enteredComment,
      submittedDate: moment(new Date()).format('h:mm a MMM DD, YYYY'),
    };

    onSaveCommentData(commentData);
    setEnteredFirstName('');
    setEnteredLastName('');
    setEnteredComment('');
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.form_data}>
        <div className={styles.form_data_control}>
          <label>First Name</label>
          <input
            type="text"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
          />
        </div>
        <div className={styles.form_data_control}>
          <label>Last Name</label>
          <input
            type="text"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
          />
        </div>
        <div className={styles.form_data_control}>
          <label>Comment</label>
          <input
            type="text"
            value={enteredComment}
            onChange={commentChangeHandler}
          />
        </div>
      </div>
      <div className={styles.form_data_actions}>
        <button className={styles.form_button} type="submit">
          Submit Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
