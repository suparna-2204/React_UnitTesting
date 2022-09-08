import './App.css';
import Todos from './components/Api/Api';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <h2>
        React Testing Demo
      </h2>
      <Counter/>
      <Todos/>
    </div>
  );
}

export default App;
