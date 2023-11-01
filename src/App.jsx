import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Detalle, Home } from './paginas/Index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="/detalle" element={<Detalle />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
