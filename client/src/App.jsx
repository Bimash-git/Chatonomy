import './App.css';
import { Routes, Route } from "react-router-dom";
import Contacts from './pages/Contacts';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import ChatPage from './pages/ChatPage';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
