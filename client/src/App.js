import React from 'react';
import Header from './components/header';
import Main from './components/Main';
import StudentList from './components/studentlist';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
