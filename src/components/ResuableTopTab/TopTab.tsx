import React from 'react'
import { Button, Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { IoMdAddCircleOutline } from 'react-icons/io'

// Define the types for props
interface TopTabProps {
  searchPlaceholder?: string
  onSearch?: (value: string) => void
  onAddClick?: () => void
  addButtonText?: string
  addButtonIcon?: React.ReactNode
  selectOptions?: { value: string; label: string }[]
  defaultSelectValue?: string
}

export const TopTab: React.FC<TopTabProps> = ({
  searchPlaceholder = 'Search',
  onSearch,
  onAddClick,
  addButtonText = 'Add',
  addButtonIcon = <IoMdAddCircleOutline />,
  selectOptions = [
    { value: '15', label: '15' },
    { value: '30', label: '30' },
    { value: '45', label: '45' },
    { value: '60', label: '60' },
  ],
  defaultSelectValue = '15',
}) => {
  return (
    <div className="flex gap-x-4 justify-between items-center m-3">
      <Input
        style={{ width: '20%', borderRadius: '20px' }}
        placeholder={searchPlaceholder}
        prefix={<SearchOutlined />}
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
      <div className="flex gap-x-4">
        <Button
          style={{ background: '#26b9eb', color: 'white' }}
          onClick={onAddClick}
        >
          {addButtonText} {addButtonIcon}
        </Button>
        <Select
          defaultValue={defaultSelectValue}
          style={{ width: 60 }}
          options={selectOptions}
        />
      </div>
    </div>
  )
}
