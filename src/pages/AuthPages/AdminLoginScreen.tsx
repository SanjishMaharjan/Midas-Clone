// src/screens/LoginScreen.tsx
import React, { useState } from 'react'
import { message } from 'antd'
import LoginForm from '../AuthPages/LoginForm'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../axios/AxionsLoginInstance'
import { AxiosResponse } from 'axios'

const AdminLoginScreen: React.FC = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true)

    try {
      const response: AxiosResponse = await axiosInstance.post('/login', {
        username,
        password,
      })

      // console.log(response.data.data.access_token)
      console.log(response.data.data)
      const accessToken = response.data.data.access_token

      if (response.status === 200) {
        localStorage.setItem('accessToken', accessToken)

        navigate('/')
        message.success('Login Successful')
      }
    } catch (error) {
      message.error('Invalid username or password')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <h2 className="mt-5 text-center text-lg font-bold text-[var(--text-color)]">
        Midas Hospital
      </h2>
      <h2 className="m-5 text-center text-2xl font-bold text-[var(--text-color)]">
        Login
      </h2>
      <div className="w-full max-w-sm mt-4 flex flex-col gap-3">
        <LoginForm onLogin={handleLogin} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default AdminLoginScreen
