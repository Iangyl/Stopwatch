import './App.css';
import Counter from './Components/Counter/Counter';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import Context from './utils/Context/Context';
import reducer from './utils/Reducer/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <Context.Provider value={state, dispatch}>
      <div className="App">
        <Counter />
        <ControlPanel />
      </div>
    </Context.Provider>
  );
}

export default App;
