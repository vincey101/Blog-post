import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import SignUp from './components/signup';
import Login from './components/login';

function App() {
  const user = localStorage.getItem("token")
  return (
    <div>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path='/signup' exact element={<SignUp />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/' exact element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
