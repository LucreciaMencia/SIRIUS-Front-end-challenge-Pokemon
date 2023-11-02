import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Details, Home } from './paginas/Index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          {/* <Route path="/detalle" element={<Details />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
