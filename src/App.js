import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
        console.log(data[0]);
        setData(data[0]);
      });
  }, []);

  const setData = ({
    name
  }) => {
    setname(name);
  };


  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
