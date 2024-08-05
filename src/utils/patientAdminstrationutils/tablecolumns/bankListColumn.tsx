// import React, { useState } from 'react';
// import { BsThreeDots } from 'react-icons/bs';
// import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import { Modal, Dropdown, Space, Menu } from 'antd';
// import type { MenuProps } from 'antd';

// const ViewModal = ({
//   visible,
//   onClose,
// }: {
//   visible: boolean;
//   onClose: () => void;
// }) => (
//   <Modal
//     title="View Details"
//     visible={visible}
//     onCancel={onClose}
//     footer={null}
//   >
//     <p>Here you can view the details.</p>
//   </Modal>
// );

// const EditModal = ({
//   visible,
//   onClose,
// }: {
//   visible: boolean;
//   onClose: () => void;
// }) => (
//   <Modal
//     title="Edit Details"
//     visible={visible}
//     onCancel={onClose}
//     footer={null}
//   >
//     <p>Here you can edit the details.</p>
//   </Modal>
// );

// export interface BankDataType {
//   key: React.Key;
//   SN: string;
//   Name: string;
//   Code: string;
// }

// const ListBank: React.FC = () => {
//   const [viewModalVisible, setViewModalVisible] = useState(false);
//   const [editModalVisible, setEditModalVisible] = useState(false);

//   const handleViewClick = () => setViewModalVisible(true);
//   const handleEditClick = () => setEditModalVisible(true);
//   const handleCloseViewModal = () => setViewModalVisible(false);
//   const handleCloseEditModal = () => setEditModalVisible(false);

//   const items: MenuProps['items'] = [
//     {
//       label: (
//         <a onClick={handleViewClick}>
//           <EyeOutlined /> View
//         </a>
//       ),
//       key: '0',
//     },
//     {
//       label: (
//         <a onClick={handleEditClick}>
//           <EditOutlined /> Edit
//         </a>
//       ),
//       key: '1',
//     },
//     {
//       label: (
//         <a>
//           <div style={{ color: 'red' }}>
//             <DeleteOutlined /> Archive
//           </div>
//         </a>
//       ),
//       key: '2',
//     },
//   ];

//   const BankListcolumns = [
//     {
//       title: 'ID',
//       dataIndex: 'id',
//       key: 'id',
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Code',
//       dataIndex: 'code',
//       key: 'code',
//     },
//     {
//       title: 'Created By',
//       dataIndex: 'created_by',
//       key: 'created_by',
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: () => (
//         <Dropdown overlay={<Menu items={items} />} trigger={['click']}>
//           <a onClick={(e) => e.preventDefault()}>
//             <Space>
//               <BsThreeDots size={20} style={{ cursor: 'pointer' }} />
//             </Space>
//           </a>
//         </Dropdown>
//       ),
//     },
//   ];

//   return (
//     <div>
//       {/* Table and other components */}
//       <Table columns={BankListcolumns} dataSource={[]} rowKey="id" />
//       <ViewModal visible={viewModalVisible} onClose={handleCloseViewModal} />
//       <EditModal visible={editModalVisible} onClose={handleCloseEditModal} />
//     </div>
//   );
// };

// export default ListBank;
