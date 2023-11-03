import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Details, Home } from './paginas/Index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/details/:pokemon_id" element={<Details />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
