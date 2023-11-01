import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import Main from './components/MainContent'

const App = (props) => {
  console.log("running")
  return (
    <div className="app">
        <Header />
        <div className='hero'>
          <Navigation />
          <Main row1={[SubContents, SubContents, SubContents]} row2={[Advertisement]} />
        </div>
    </div>
  );
}
                
export default App;