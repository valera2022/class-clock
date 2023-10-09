import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import { UserContext,UserProvider} from './context/user';
import Signup from './Signup';
import Login from './Login';
import Pitches from './Pitches';
import PitchForm from './PitchForm';
import EditPitch from './EditPitch';
import { useContext, useState } from 'react';
import PitchShow from './PitchShow'
import AddNote from './AddNote';

import EditNote from './EditNote';


function App() {
  const [preEditData, setPreEditData] = useState("")
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const openPopup = () => {
    setIsPopupOpen(true);
};

const closePopup = () => {
    setIsPopupOpen(false);
};


  

 
  function handlePreData(data){
    setPreEditData(data)
  
  }

  
   
  

  
  return (
    <div className="App">
     <UserProvider>
       <NavBar/>
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/pitches" element={<Pitches handlePreData={handlePreData} setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} openPopup={openPopup} />}  />
        <Route exact path="/pitches/new" element={<PitchForm />} />
        <Route exact path="/pitches/:id/edit" element={<EditPitch preEditData={preEditData}/>}  />
        <Route exact path="/pitches/:id" element={<PitchShow  />}  />
        <Route exact path="/pitches/:id/notes/new" element={<AddNote />}  />
        <Route exact path="/notes/:id/edit" element={<EditNote setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen}/>}  />

       </Routes>
     </UserProvider>
    </div>
  );
}

export default App;
