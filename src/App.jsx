import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [animation1, setAnimation1] = useState(true);
  const [animation2, setAnimation2] = useState(true);
  const [animation3, setAnimation3] = useState(true);
  const [animation4, setAnimation4] = useState(true);
  const [animation5, setAnimation5] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle the state every 5 seconds
      setAnimation1((prevIsAnimating) => !prevIsAnimating);
      setAnimation2((prevIsAnimating) => !prevIsAnimating);
      setAnimation3((prevIsAnimating) => !prevIsAnimating);
      setAnimation4((prevIsAnimating) => !prevIsAnimating);
      setAnimation5((prevIsAnimating) => !prevIsAnimating);
    }, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='space'>
      <div className='sun'>
        <img src='TCIPHERLOGO.png' alt='' />
      </div>

      <div className='mercury-outline'>
        <div className={`mercury${animation1}`}></div>
      </div>
      <div className='venus-outline-1'>
        <div className={`venus${animation2}`}></div>
      </div>

      <div className='earth-outline-1'>
        <div className={`earth${animation3}`}></div>
      </div>

      <div className='mars-outline-1'>
        <div className={`mars${animation4}`}></div>
      </div>

      <div className='jupiter-outline-1'>
        <div className={`jupiter${animation5}`}></div>
      </div>
    </div>
  );
};

export default App;
