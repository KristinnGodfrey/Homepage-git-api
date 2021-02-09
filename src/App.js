import React, { useState, useEffect } from 'react';
import FixedMenuLayout from './main.js';
import logo from './logo.svg';
import messages from './messages.js'
import './App.css';

function App() {
  const [length, setLength] = useState('');
  const [name, setname] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState(''); 
  const [following, setFollowing] = useState(''); 
  const [repos, setAvatar] = useState('');
  const [userInput, setUserInput] = useState(''); 
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/kristinngodfrey/repos')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);
  

  const setData = ({
    length
  }) => {
    setLength(length);
  };
  const data = <h1>I have {length} repos on github!</h1>
  return (    
    <div>
      
      <FixedMenuLayout data={ data } />
      
      
    </div>
  );
}

export default App;
