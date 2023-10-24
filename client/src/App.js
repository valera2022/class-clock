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

import PitchShow from './PitchShow'
import AddNote from './AddNote';
import Comments from './Comments';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import EditNote from './EditNote';


function App() {

  



  

  

 
  
   
  

  
  return (
    <div className="App">
     <UserProvider>
     
       <NavBar/>
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/pitches" element={<Pitches   />}  />
        <Route exact path="/pitches/new" element={<PitchForm />} />
       
        <Route exact path="/pitches/:id" element={<PitchShow />}  />
        <Route exact path="/pitches/:id/notes/new" element={<AddNote />}  />
        <Route exact path="/notes/:id/edit" element={<EditNote />}  />
        <Route exact path="/comments" element={<Comments/>}/>

       </Routes>
     </UserProvider>
    </div>
  );
}

export default App;
