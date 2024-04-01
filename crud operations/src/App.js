import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="main"> 
      <h1>CRUD Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} /> 
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
