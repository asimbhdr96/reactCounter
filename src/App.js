import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter/>
        <CounterClass/>

      </header>

    </div>
  );
}

export default App;
