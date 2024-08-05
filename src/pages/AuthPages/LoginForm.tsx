// src/AuthPages/LoginForm.tsx
import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'

interface LoginFormProps {
  onLogin: (username: string, password: string) => void
  isLoading: boolean
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, isLoading }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    onLogin(username, password)
  }

  return (
    <Form
      layout="vertical"
      className="w-full max-w-sm mt-4 flex flex-col gap-3"
      onFinish={handleSubmit}
    >
      <Form.Item label="Username">
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          block
          htmlType="submit"
          loading={isLoading}
          style={{ background: '#282561' }}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
