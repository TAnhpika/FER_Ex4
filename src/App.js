import "./App.css";

function App() {
    return (
        <div className="container">
            <nav className="navbar">
                <a href="#home" className="nav-item active">
                    Home
                </a> 
                <a href="#search" className="nav-item">
                    Search
                </a>
                <a href="#contact" className="nav-item">
                    Contact
                </a>
                <a href="#login" className="nav-item login">
                    Login
                </a>
            </nav>
        </div>
    );
}

export default App;
