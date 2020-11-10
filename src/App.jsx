import { useState } from 'react';
import './App.css';
import Chat from './screens/Chat';
import Login from './screens/Login';
import AuthenticationService from './services/authentication';
import logo from './assets/logo.svg'

function App() {
  const [logged, setLogged] = useState(AuthenticationService.isLoggedIn())
  
  AuthenticationService.observeStatus(user => {
    setLogged(!!user)
  })

  return (
    <div className="App">
      <div className="Logo">
        <img src={logo} alt="AlgaZap"/>
      </div>
      { logged ? <Chat /> : <Login /> }
    </div>
  );
}

export default App;
