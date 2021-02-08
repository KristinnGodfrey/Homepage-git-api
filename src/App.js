import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
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
        data.forEach(d => {
          fetch('https://api.github.com/users/kristinngodfrey/repos/{d}/languages')
          .then(res => res.json())
          .then(data2 => {
            console.log(data2);
        })
        console.log(data);
        setData(data);
      });
  }, []);
  

  const setData = ({
    length
  }) => {
    setLength(length);
  };


  return (
    <div>
      <h1>I have {length} repos on github!</h1>
    </div>
  );
}

export default App;
