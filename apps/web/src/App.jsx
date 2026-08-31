import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ModulePage from './pages/ModulePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/modules/:moduleId" element={<ModulePage />} />
      </Routes>
    </BrowserRouter>
  );
}
