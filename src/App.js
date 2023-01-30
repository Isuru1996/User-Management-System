import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  exact path='/' element={<Home/>}/>
        <Route  path='addUser' element={<AddUser/>}/>
        <Route  path='editUser/:userId' element={<EditUser/>}/>
      </Routes> 
    </div>
  );
}

export default App;
