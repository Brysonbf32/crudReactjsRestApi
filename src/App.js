import logo from './logo.svg';
//import './Assets/Style.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployListing from './components/EmployListing';
import EmpCreate from './components/EmpCreate';
import EmpDetails from './components/EmpDetails';
import EmpEdit from './components/EmpEdit';

function App() {


//AFFICHAGE
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<EmployListing />}></Route>
        <Route path='/employee/create' element={<EmpCreate />}></Route>
        <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        <Route path='/employee/detail/:empid' element={<EmpDetails />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//GESTION DU FORMULAIRE
//1.Creation du formulaire
//2.Soummission du formulaire
//3.Collecte donnes du formulaire 