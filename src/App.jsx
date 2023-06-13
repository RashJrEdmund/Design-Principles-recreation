import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
