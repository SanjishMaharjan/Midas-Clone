import React from 'react'
import { Button, Result, ConfigProvider, theme } from 'antd'
import { useNavigate } from 'react-router-dom'

const { useToken } = theme

const PageNotFound: React.FC = () => {
  const navigate = useNavigate()
  const { token } = useToken()

  const customizeToken = {
    Result: {
      titleColor: 'var(--text-color)',
      subtitleColor: 'var(--text-color)',
      iconFontSize: 64,
      extraMargin: `${token.marginMD}px 0 0 0`,
    },
    Button: {
      colorPrimary: 'var(--primary-color)',
      colorPrimaryHover: 'var(--primary-color-hover)',
      colorPrimaryActive: 'var(--primary-color-active)',
    },
  }

  return (
    <ConfigProvider
      theme={{
        components: customizeToken,
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Back Home
          </Button>
        }
      />
    </ConfigProvider>
  )
}

export default PageNotFound
