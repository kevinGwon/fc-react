import React, { useState, useEffect } from 'react';

function Example5() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('didMount, UpdateMount');
  });

  useEffect(() => {
    console.log('Did');
  }, []);

  useEffect(() => {
    console.log('DidUpdtate', count);
  }, [count]);

  // cleanup -> useEffect 순서
  // dep가 없으면 cleanup이 계쏙 실행된다.
  useEffect(() => {
    console.log('A');
    return () => {
      // cleanup func
      console.log('B');
      console.log('willUnMount');
    };
  });

  // 변화가 일어나면 B가 실행된다.
  // dep가 있으면
  // cleanup함수에는 이전 값을 가지고 있다.
  useEffect(() => {
    console.log('A');
    return () => {
      // cleanup func
      console.log('B');
      console.log('willUnMount');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Example5;
