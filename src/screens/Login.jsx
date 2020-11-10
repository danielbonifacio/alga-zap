import AuthenticationService from "../services/authentication"

function Login () {
  function handleLogin () {
    AuthenticationService.loginWithGoogle()
  }

  return <div className="Login">
    <button
      onClick={handleLogin}
    >
      Login com o Google
    </button>
  </div>
}

export default Login