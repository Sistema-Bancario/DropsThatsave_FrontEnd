
import React, { useState, useEffect } from 'react';
import useOnScreen from './useOnScreen';

const NumberCard = ({ Icon, title, targetNumber, timeout }) => {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.1 });
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let interval;
    if (isOnScreen && number < targetNumber) {
      interval = setInterval(() => setNumber(prev => Math.min(prev + 1, targetNumber)), timeout);
    }
    return () => clearInterval(interval);
  }, [number, targetNumber, isOnScreen]);

  return (
    <div className='card' ref={ref}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Icon style={{ color: 'red' }} />
        {title}
      </h3>
      <p
        style={{ color: 'red', fontSize: '90px' }}
      >
        +{number}
      </p>
    </div>
  );
};

export default NumberCard;
