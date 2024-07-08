import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-6xl px-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
