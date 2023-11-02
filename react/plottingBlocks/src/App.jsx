import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import MainContent from './components/MainContent';

const App = (props) => {
  console.log("running")
  return (
    <div className="app">
        <Header />
        <Navigation />
        <MainContent >
          <SubContents/>
          <SubContents/>
          <SubContents/>
          <Advertisement/>
        </MainContent>
    </div>
  );
}
                
export default App;