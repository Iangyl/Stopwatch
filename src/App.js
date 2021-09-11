import { useEffect, useState, useCallback } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import './App.css';
import Counter from './Components/Counter/Counter';
import ControlPanel from './Components/ControlPanel/ControlPanel';


function App() {
  const [sec, setSec] = useState(0);
  const [status, setStatus] = useState("stop");

  const icons = {
    iconStop: 'Icons/stop.png',
    iconPlay: 'Icons/play.png',
  }

  useEffect(() => {
    const unsubscribe = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (status === "play") {
          setSec(value => value + 1000);
        }
      });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [status]);

  const play = useCallback(() => {
    setStatus("play");
  }, []);
 
  const stop = useCallback(() => {
    setStatus("stop");
    setSec(0);
  }, []);
 
  const reset = useCallback(() => {
    setStatus("stop");
    setSec(0);
  }, []);
 
  const pause = useCallback(() => {
    setStatus("pause");
  }, []);

  return (
    <div className="App">
      <Counter time={new Date(sec).toISOString().slice(11, 19)}  />
      <ControlPanel pause={pause} reset={reset} play={play} stop={stop} status={status} icons={icons}/>
    </div>
  );
}

export default App;
