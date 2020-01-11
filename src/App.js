import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example5 from './components/Example5';
import useWindowWidth from './Hooks/useWindowWidth';
import useHasMounted from './hocs/useHasMounted';
// import widthHasMounted from './hocs/withHasMounted';

function App() {
  const width = useWindowWidth();
  useHasMounted();
  return (
    <div className='App'>
      <h1>{width}</h1>
    </div>
  );
}

export default App;

// class type HOC

// function App({ hasMounted }) {
//   const width = useWindowWidth();
//   console.log(hasMounted);
//   return (
//     <div className='App'>
//       <h1>{width}</h1>
//     </div>
//   );
// }

// export default widthHasMounted(App);
