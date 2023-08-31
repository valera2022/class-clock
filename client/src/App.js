import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import { UserProvider } from './context/user';


function App() {
  return (
    <div className="App">
     <UserProvider>
       <NavBar/>
       <Routes>
        <Route exact path="/" element={<Home/>} />

       </Routes>
     </UserProvider>
    </div>
  );
}

export default App;
