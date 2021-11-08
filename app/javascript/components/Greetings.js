import React, { useState } from 'react';

const Greetings = () => {
  const [greeting, setGreeting] = useState('Hello masta');
  return (
    <>
      <div>
        Greating of the day:
        <p>{greeting}</p>
      </div>
    </>
  );
};

export default Greetings;
