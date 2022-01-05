import './App.css';
import { useRef, useState, useEffect } from "react";


export default function Stopwatch() {
  const timerIdRef = useRef(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const renderCount = useRef(1);
  const [startStopButton, setStartStopButton] = useState('Start');


  const startHandler = () => {
    setStartStopButton('Stop');
    if (timerIdRef.current == 0) {
      timerIdRef.current = setInterval(() => setElapsedTime((c) => c + 1), 1000);
    }
  };

  const stopTimer = () => {
    if (timerIdRef.current != 0) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = 0;
    }
  };

  const stopHandler = () => {
    setStartStopButton('Pause');
    stopTimer();
  };

  const resetHandler = () => {
    setStartStopButton('Start');
    stopTimer();
    setElapsedTime(0);
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div id="mainWindow">
      <h1>Stop Watch</h1>
      <div className="timer"> Timer: {elapsedTime}s </div>
      <div className="button_row">
        { (startStopButton == 'Start' || startStopButton == 'Pause') ? <button className='greenButton' onClick={startHandler}>Start</button> : <button className='redButton' onClick={stopHandler}>Stop</button>}
        {startStopButton == 'Pause' ? <button className='greyButton' onClick={resetHandler}>Reset</button> : <span></span>}
      </div>
      <div className='testingInfo'>Render Count: {renderCount.current}</div>
    </div>
  );
}