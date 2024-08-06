export type BankDetails = {
    id: string
    name: string
    code: string
    created_by: string
    created_at: string
    updated_at: string
  }
export type OurPaginationProps = {
    current_page: number
    page_size: number
    total: number
    // handlePaginationChange : (page: number, pageSize?: number) => void
    
  }
  
