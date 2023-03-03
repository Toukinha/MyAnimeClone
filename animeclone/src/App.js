import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AnimeDetails from './pages/AnimeDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Main /> } />
        <Route exact path="/anime/:id" element={ <AnimeDetails /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
