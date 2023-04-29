import { Routes,Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/About/about';
import LogOut from './components/LogOut/logout';
import Login from './components/Login/login';
import Contact from './components/Contact/contact';
import CompleteDetailsForm from './components/CompleteDetailsForm/completedetailsform';
import Templates from './components/template/template';
import './App.css';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<LogOut/>}></Route>
        <Route path='/detailsform' element={<CompleteDetailsForm/>}></Route>
        <Route path='/template' element={<Templates/>}></Route>
    </Routes>
  );
}

export default App;
