import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import { useSelector } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Chat from './components/chats/Chat';

const App = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    console.log(isLoggedIn);
    return (
        <div className='mx-3 font-poppins'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/chat' element={<Chat />} />
            </Routes>
        </div>
    );
};

export default App;
