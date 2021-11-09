import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {
  const state = useSelector((state) => state);
  if (Object.keys(state.greeting.greeting).length == 0)
    return <div>loading...</div>;
  const { data } = state.greeting.greeting;
  console.log('render', data);
  return (
    <>
      <div>
        Greating of the day:
        <p>{data.message}</p>
      </div>
    </>
  );
};

export default Greetings;
