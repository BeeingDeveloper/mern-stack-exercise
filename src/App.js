import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreateExercise from './Pages/CreateExercise';
import CreateUser from './Pages/CreateUser';
import EditExercise from './Pages/EditExercise';
import ExerciseList from './Pages/ExerciseList';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<ExerciseList/> } />
        <Route path='/edit/:id' exact element={<EditExercise/> } />
        <Route path='/createexercise' exact element={<CreateExercise/> } />
        <Route path='/createuser' exact element={<CreateUser/> } />
      </Routes>
    </div>
  );
}

export default App;
