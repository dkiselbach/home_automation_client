import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default App;
