import React from 'react'
import { Modal, Input, Select, ConfigProvider, theme } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import sampleData from '../../sampleData/samplecontent.json'
import ShowModalContentsList from '../../components/ContentsListing/ModalContentList'

interface ModalProps {
  visible: boolean
  onClose: () => void
}

const { useToken } = theme

const ShowModal: React.FC<ModalProps> = ({ visible, onClose }) => {
  const { token } = useToken()

  const customizeToken = {
    Modal: {
      contentBg: 'var(--bg-color)',
      headerBg: 'var(--bg-color)',
      titleColor: 'var(--text-color)',
      borderRadius: token.borderRadiusLG,
      closeBtnSize: 24,
      closeColorHover: token.colorPrimaryHover,
    },
  }

  return (
    <ConfigProvider
      theme={{
        components: customizeToken,
      }}
    >
      <Modal
        open={visible}
        onCancel={onClose}
        footer={null}
        width={900}
        title="Modules"
        className="custom-modal"
      >
        <div className="w-full   max-w-xl mx-auto mb-5">
          <Input
            placeholder="Search for modules, sub-modules, settings, etc"
            className="rounded-full border border-customPurple"
            prefix={<SearchOutlined />}
          />
        </div>
        <div className="flex flex-row justify-between items-center mb-5">
          <Select
            defaultValue="All Modules"
            style={{ width: 120 }}
            options={[
              { value: 'All Modules', label: 'All Modules' },
              { value: 'specialty', label: 'Specialty' },
              { value: 'specific', label: 'Specific' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sampleData.map((item, index) => (
            <ShowModalContentsList
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </Modal>
    </ConfigProvider>
  )
}

export default ShowModal
