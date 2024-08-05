import React, { useState, useEffect } from 'react'
import { fetchBankDetails } from '../../axios/fetchdata'
import { PatientListTopTab } from '../../components/PatientListTopTab'

type BankDetails = {
  id: string
  name: string
  code: string
  created_by: string
}

type Props = {}

const Test: React.FC<Props> = (props) => {
  const [bankDetails, setBankDetails] = useState<BankDetails[]>([])

  useEffect(() => {
    const getBankData = async () => {
      try {
        const response = await fetchBankDetails()
        console.log(response.data)
        setBankDetails(response.data) // Assuming response.data is an array of bank details
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getBankData()
  }, [])

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <div>List of Banks</div>
      <PatientListTopTab />
      <ul>
        {bankDetails.map((bank) => (
          <li key={bank.id} className="mb-2">
            <div>Code: {bank.code}</div>
            <div>ID: {bank.id}</div>
            <div>Name: {bank.name}</div>
            <div>Created By: {bank.created_by}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Test
