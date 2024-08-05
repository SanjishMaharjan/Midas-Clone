import Logo from '../../assets/images/Midas_general.png'
import bottomLogo from '../../assets/images/icon-02 2.png'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import { message } from 'antd'

function LoginScreen() {
  const navigate = useNavigate()
  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      navigate('/')
      message.success('Login Successful')
    } else {
      message.error('Invalid username or password')
    }
  }

  return (
    <>
      <div className=" w-full flex flex-col items-center justify-center gap-2">
        <img
          className="mt-10"
          src={Logo}
          alt="login"
          width="162px"
          height="137px"
        />
        <h2 className="mt-5  text-center text-lg font-bold text-customPurple">
          Midas Hospital
        </h2>
        <h2 className="m-5 text-center text-2xl font-bold text-customPurple">
          Login
        </h2>
        <div className="w-full max-w-sm mt-4 flex flex-col gap-3">
          <LoginForm onLogin={handleLogin} isLoading={true} />

          <h3 className="text-center text-xs">
            Username and password are attached on the OPD card.
          </h3>
        </div>
        <div className="m-10 w-full max-w-sm flex flex-row items-center justify-center">
          <div className="w-full max-w-sm flex flex-col">
            <h3 className="text-xs">Having trouble signing in?</h3>
            <h3 className="text-xs text-customPurple">
              Please contact +977-1-5970604
            </h3>
          </div>
          <img
            className="mt-10"
            src={bottomLogo}
            alt="login"
            width="227px"
            height="120px"
          />
        </div>
      </div>
    </>
  )
}

export default LoginScreen
