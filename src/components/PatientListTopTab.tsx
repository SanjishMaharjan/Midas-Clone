import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Select } from 'antd'
// import { IoAddSharp } from 'react-icons/io5'
import { IoMdAddCircleOutline } from 'react-icons/io'

export const PatientListTopTab: React.FC = () => {
  return (
    <div className="flex gap-x-4 justify-between items-center m-3">
      <Input
        style={{ width: '20%', borderRadius: '20px' }}
        placeholder="Search"
        prefix={<SearchOutlined />}
      />
      <div className="flex gap-x-4">
        <Button style={{ background: '#26b9eb', color: 'white' }}>
          Add <IoMdAddCircleOutline />
        </Button>
        <Select
          defaultValue="15"
          style={{ width: 60 }}
          options={[
            { value: '15', label: '15' },
            { value: '30', label: '30' },
            { value: '45', label: '45' },
            { value: '60', label: '60' },
          ]}
        />
      </div>
    </div>
  )
}
