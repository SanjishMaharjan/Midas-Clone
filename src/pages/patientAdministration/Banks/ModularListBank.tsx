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
import NewSidebar from '../../../components/Sidebar/TestSidebar'
import { Layout } from 'antd'
import Navigationbar from '../../../components/Navigationbar'

const { Header } = Layout

const ModularListBank: React.FC = () => {
  const [viewModalVisible, setViewModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [addModalVisible, setAddModalVisible] = useState(false)
  const [selectedBank, setSelectedBank] = useState<BankDetails | null>(null)
  const [bankDetails, setBankDetails] = useState<BankDetails[]>([])

  const getBankData = async () => {
    try {
      const data = await fetchBankDetails()
      setBankDetails(data.data)
      console.log(data.data)
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
  }, [])

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

  const Breadcrumbitems = [
    {
      title: <HomeOutlined />,
      href: '/',
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
        <Header className="bg-white">
          <Navigationbar />
        </Header>
        {/* <h1 className="text-2xl font-bold m-5 text-center">List of Banks</h1> */}
        <AntBreadcrumb items={Breadcrumbitems} />
        <div className="p-4 m-4 border-2 rounded-lg bg-white">
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
