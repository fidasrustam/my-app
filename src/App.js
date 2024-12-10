import './App.css';
import {Routes, Route,NavLink} from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import WorkSamples from './Components/WorkSapmles';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <div className='about'>
      <NavLink to='/' className="nav-link" activeClassName="active-link">Haqqında</NavLink>
      <NavLink to='/works' className="nav-link" activeClassName="active-link">İş nümunələri</NavLink>
      <NavLink to='/contact' className="nav-link" activeClassName="active-link">Əlaqə</NavLink>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/works" element={<WorkSamples />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       </div>
  );
};
export default App;


