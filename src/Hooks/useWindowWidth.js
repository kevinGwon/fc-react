import React, { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventLister('resize', onResize);
    };
  }, []);

  return width;
}

export default useWindowWidth;
