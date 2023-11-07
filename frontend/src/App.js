import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './pages/Home';
import Database from './pages/Database';
import DatabaseDetails from './pages/DatabaseDetails';
import Middleware from './pages/Middleware';
import MiddlewareDetails from './pages/MiddlewareDetails';
import Admin from './pages/Admin';
import Login from './pages/Login';
import AddDB from './pages/AddDB';
import UpdateDB from './pages/UpdateDB';
import AddMW from './pages/AddMW';
import UpdateMW from './pages/UpdateMW';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/database" element={<Database />} />
            <Route path="/database/:name" element={<DatabaseDetails />} />
            <Route path="/middleware" element={<Middleware />} />
            <Route path="/middleware/:name" element={<MiddlewareDetails />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/add-database" element={<AddDB />} />
            <Route path="/admin/update-database/:id" element={<UpdateDB />} />
            <Route path="/admin/add-middleware" element={<AddMW />} />
            <Route path="/admin/update-middleware/:id" element={<UpdateMW />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
