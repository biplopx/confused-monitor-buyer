import React from 'react';

const Questions = () => {
  return (
    <div className='border m-3 p-3'>
      <h3>1. How react works?</h3>
      <p>Ans: React is frontend develop libary/framework that help too build modern web applications.<br /> React is components based framework we can create website part as components. Its easy to maintain big application easily.<br />React works very fast becasue its create virtual dom in memory and compare to real browser dom.<br />React Changes data only when its changes.React find the find out what changed we made have. then its update only thoose things. That's why react works faster.  </p>
      <h3>2. Props vs State</h3>
      <p>Ans: In react js props are like function parameter. we can pass any time of data(object, array,function etc). <br /> To pass data from one components to another components we can use props. wel can declare props easily like html element attribute.
        <ul>
          <li>we can just read props data</li>
          <li>Props are immuteable</li>
          <li>We can pass data to components like function paramter</li>
        </ul>
      </p>
      <p>State is another feature in react js to store component data and track theme. using useSate you can track copoments data. </p>
      <ul>
        <li>State can be change asynchronously</li>
        <li>Props are mutable</li>
        <li>Sate can hold components data and track data changes.</li>
      </ul>
    </div>
  );
};

export default Questions;