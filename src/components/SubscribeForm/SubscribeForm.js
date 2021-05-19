import React, { useState } from 'react';

import Form from './Form';
import styles from './SubscribeForm.css';

const SubscribeForm = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const saveSubscribeDataHandler = (enteredSubscribeData) => {
    const subscribeData = {
      ...enteredSubscribeData,
      id: Math.random().toString(),
    };
    console.log(subscribeData);

    setIsSubscribed(true);
  };

  return (
    <div>
      <div className={styles.new_comment}>
        <Form onSaveSubscribeData={saveSubscribeDataHandler} />
      </div>
      {isSubscribed && (
        <div className={styles.message}>
          <h5>Thank you for subscribing!</h5>
        </div>
      )}
    </div>
  );
};

export default SubscribeForm;
