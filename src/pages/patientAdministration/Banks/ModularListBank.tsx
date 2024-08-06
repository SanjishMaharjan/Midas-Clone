import React, { useState, useEffect } from 'react'
import {
  fetchBankDetails,
  changeBankDetails,
  archiveBankDetails,
  addBankDetails,
} from '../../../axios/fetchdata'
import { message } from 'antd'
import { TopTab } from '../../../components/ResuableTopTab/TopTab'
import '../../../components/ReusableTable/ReusableTableStyles.css'
import AntBreadcrumb from '../../../components/Navigations/AntBreadcrumb'
import { HomeOutlined } from '@ant-design/icons'
import BankTable from './BankTable'
import { EditModal, ViewModal, AddModal } from './BankModals'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { BankDetails } from '../../../types/Banks/BankTypes'
import NewSidebar from '../../../components/Sidebar/Sidebar'
import { Layout } from 'antd'
import { OurPaginationProps } from '../../../types/Banks/BankTypes'

const { Header } = Layout

const ModularListBank: React.FC = () => {
  const [viewModalVisible, setViewModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [addModalVisible, setAddModalVisible] = useState(false)
  const [selectedBank, setSelectedBank] = useState<BankDetails | null>(null)
  const [bankDetails, setBankDetails] = useState<BankDetails[]>([])
  const [pagination, setPagination] = useState<OurPaginationProps>({
    current_page: 1,
    page_size: 10,
    total: 0,
  })

  const getBankData = async () => {
    try {
      const data = await fetchBankDetails()
      setBankDetails(data.data)
      console.log(data.data)
      const paginationInfo = data.meta
      setPagination({
        current_page: paginationInfo.current_page,
        page_size: paginationInfo.page_size,
        total: paginationInfo.total,
      })
      console.log(pagination)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSaveBankDetails = async (updatedBank: BankDetails) => {
    try {
      await changeBankDetails(updatedBank.id, {
        name: updatedBank.name,
        code: updatedBank.code,
      })
      await getBankData()
      message.success('Bank Details Updated Successfully')
    } catch (error) {
      console.error('Error updating data:', error)
      message.error('Failed to update bank details')
    }
  }

  const handleAddBankDetails = async (
    newBank: Omit<BankDetails, 'id' | 'created_by' | 'created_at'>,
  ) => {
    try {
      await addBankDetails(newBank)
      await getBankData()
      message.success('Bank Added Successfully')
    } catch (error) {
      console.error('Error adding bank:', error)
      message.error('Failed to add bank')
    }
  }

  const handleArchiveBank = async (id: string) => {
    try {
      await archiveBankDetails(id)
      await getBankData()
      message.success('Bank Archived Successfully')
    } catch (error) {
      console.error('Error archiving data:', error)
      message.error('Failed to archive bank')
    }
  }

  useEffect(() => {
    getBankData()
  }, [pagination.current_page, pagination.page_size])

  const handleViewClick = (bank: BankDetails) => {
    setSelectedBank(bank)
    setViewModalVisible(true)
  }

  const handleEditClick = (bank: BankDetails) => {
    setSelectedBank(bank)
    setEditModalVisible(true)
  }

  const handleAddClick = () => {
    setAddModalVisible(true)
  }

  const handleCloseViewModal = () => setViewModalVisible(false)
  const handleCloseEditModal = () => setEditModalVisible(false)
  const handleCloseAddModal = () => setAddModalVisible(false)

  const handlePaginationChange = (page: number, pageSize?: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      current_page: page,
      page_size: pageSize || prevPagination.page_size,
    }))
  }

  const Breadcrumbitems = [
    {
      title: <HomeOutlined />,
      href: '/',
    },
    {
      title: 'Patient Administration',
      href: '/test',
    },
    {
      title: 'Banks',
      href: '/Banks',
    },
  ]

  return (
    <div className="flex">
      <NewSidebar />
      <div className="flex-1">
        <AntBreadcrumb items={Breadcrumbitems} />
        <div className="p-4 m-4 border-2  rounded-lg bg-[var(--bg-color)] ">
          <TopTab
            searchPlaceholder="Search Banks"
            onSearch={(value) => console.log('Search:', value)}
            onAddClick={handleAddClick}
            addButtonText="Add Bank"
            addButtonIcon={<IoMdAddCircleOutline />}
          />
          <BankTable
            data={bankDetails}
            onView={handleViewClick}
            onEdit={handleEditClick}
            onArchive={handleArchiveBank}
            pagination={{
              current_page: pagination.current_page,
              page_size: pagination.page_size,
              total: pagination.total,
            }}
            onPaginationChange={handlePaginationChange}
          />
          <ViewModal
            visible={viewModalVisible}
            onClose={handleCloseViewModal}
            bankDetails={selectedBank}
          />
          <EditModal
            visible={editModalVisible}
            onClose={handleCloseEditModal}
            bankDetails={selectedBank}
            onSave={handleSaveBankDetails}
          />
          <AddModal
            visible={addModalVisible}
            onClose={handleCloseAddModal}
            onAdd={handleAddBankDetails}
          />
        </div>
      </div>
    </div>
  )
}

export default ModularListBank
