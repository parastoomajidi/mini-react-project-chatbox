import './App.css';
import {BrowserRouter, Routes, Route, useParams} from "rect-router-dom";
import { Home } from './Pages/Home';
import {AdminPanel} from './Pages/AdminPanel'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adminpanel' element={<AdminPanel/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
