import React, { useEffect, useState } from 'react';

const LazyComponent = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data is here');
      }, 10000);
    });
    return promise;
  };

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
    });
  }, []);

  return <div>{data}</div>;
};

export default LazyComponent;
