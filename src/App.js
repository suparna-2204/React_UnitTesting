import './App.css';
import Todos from './components/Api/Api';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div>
      <h3>
        React Testing Demo
      </h3>
      <Counter/>
      <Todos/>
    </div>
  );
}

export default App;
