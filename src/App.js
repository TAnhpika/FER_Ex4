import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={logo} alt="React Logo" className="react-logo" />
        <hr className="divider" />
        <h2 className="title">This is the React logo!</h2>
        <p className="subtitle">(I don't know why it is here either)</p>
        <p className="description">The library for web and native user interfaces</p>
      </div>
    </div>
  );
}

export default App;
