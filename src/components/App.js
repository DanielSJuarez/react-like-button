import { useState } from 'react';
import '../App.css';
import LikeButton from './button';

function App(props) {
  const [counter, setCounter] = useState(0)

  const numCount = () => {
    setCounter(counter + 1);
    }

  return (
    <LikeButton numCount={numCount} counter = {counter}/>
  );
  }

export default App;
