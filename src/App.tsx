import React, { useEffect, useState } from 'react';
import './App.css';
import axiosAuth from './api';

interface  Jokes{
  icon_url: string;
  url: string;
  id: string;
  value: string;
}


const App: React.FC<{}> = () => {
const [joke,setJoke] = useState<Jokes>();
  useEffect(() => {
    axiosAuth.get('/random').then((res) => {
        setJoke(res.data);
    })
  }, [])

  const handleRefresh = () => {
    axiosAuth.get('/random').then((res) => {
      setJoke(res.data);
    })
  } 
  return (
    <div className="App">
      <header className="App-header">
        <img src={joke?.icon_url} alt="icon"/>
        <p>{joke?.value}</p>

        <button onClick={() => handleRefresh()}>New</button>
      </header>
    </div>
  );
}

export default App;
