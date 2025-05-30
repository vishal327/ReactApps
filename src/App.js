import './App.css';
import logo from './wtv.png';
function App() {
  return (
   <>

 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
    <div className="ms-auto">
      <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
    </div>  
  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Scoring</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">PlayerDetails</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Toss</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

   </>
  );
}

export default App;
