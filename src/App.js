import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import NavbarVista from './vista/NavbarVista';
import InicioVista from './vista/InicioVista';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterVista from './vista/FooterVista';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="content-wrap">
          <NavbarVista/>
          <Routes>
            <Route path='/' element={<InicioVista/>}/>
          </Routes>
        </div>
        <FooterVista/>
      </Router>
    </div>
  );
}

export default App;


