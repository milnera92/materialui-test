import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Material UI Test
        </p>
        <Button variant="contained">Button</Button>
      </header>
    </div>
  );
}

export default App;
