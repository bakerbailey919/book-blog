import React, { useState } from 'react';

import styles from './Form.css';

const Form = (props) => {
  const { onSaveSubscribeData } = props;

  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredBirthDate, setEnteredBirthDate] = useState('');

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const birthDateChangeHandler = (event) => {
    setEnteredBirthDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const subscribeData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      birthDate: new Date(enteredBirthDate),
    };

    onSaveSubscribeData(subscribeData);
    setEnteredFirstName('');
    setEnteredLastName('');
    setEnteredEmail('');
    setEnteredBirthDate('');
  };

  return (
    <form onSubmit={submitHandler}>
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
          <label>Email</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={styles.form_data_control}>
          <label>Birth Date</label>
          <input
            type="date"
            min="1950-01-01"
            step="2005-12-31"
            value={enteredBirthDate}
            onChange={birthDateChangeHandler}
          />
        </div>
      </div>
      <div className={styles.form_data_actions}>
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default Form;
