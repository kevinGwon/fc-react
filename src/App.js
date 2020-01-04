import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './Button';
import StyledButton from './components/StyledButton';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <StyledButton>버튼</StyledButton>
      </header>
    </div>
  );
}

export default App;
