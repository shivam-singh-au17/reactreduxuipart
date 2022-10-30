import React, { useState } from 'react'
import styles from "./Button.module.css";
import Button from "./Button";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
      setCount(count + 1);
    };
    
    const handleReduce = () => {
       setCount(count - 1);
    };

    return (
      <div className={styles.mydiv}>
        <h1>Count:</h1>
        <h1 data-testid="counter">{count}</h1>
        <Button label="ADD" onClick={handleAdd} />
        <Button label="REDUCE" onClick={handleReduce} />
      </div>
    );
}

export default Counter
