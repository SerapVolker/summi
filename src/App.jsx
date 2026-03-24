// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import Drink from './pages/Drinks';
import Cocktails from './pages/Cocktails';
import Booking from './pages/Booking';
const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <main className="main-content">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/Drink" element={<Drink/>} />
            <Route path="/Cocktails" element={<Cocktails />} />
            <Route path="/Booking" element={<Booking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;