// // import { useState, useEffect } from 'react';
// // import { getAdminUsers, updateUserStatus  } from '../../utils/api';
// // import AdminSidebar from '../../components/AdminSidebar';

// // export default function UserManagement() {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [pagination, setPagination] = useState({
// //     page: 1,
// //     limit: 10,
// //     total: 0
// //   });

// //   const fetchUsers = async () => {
// //     try {
// //       setLoading(true);
// //       const data = await getAdminUsers(pagination.page, pagination.limit, searchTerm);
// //       setUsers(data.data);
// //       setPagination(prev => ({ ...prev, total: data.total }));
// //       setError(null);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// // const handleStatusChange = async (userId, currentStatus) => {
// //   try {
// //     let action;
// //     let message;
    
// //     switch(currentStatus) {
// //       case 'active':
// //         if (!confirm('Are you sure you want to suspend this user?')) return;
// //         action = 'suspend';
// //         message = 'User suspended successfully';
// //         break;
// //       case 'suspended':
// //         action = 'reinstate';
// //         message = 'User reinstated successfully';
// //         break;
// //       case 'banned':
// //         if (!confirm('Are you sure you want to reinstate this banned user?')) return;
// //         action = 'reinstate';
// //         message = 'User reinstated successfully';
// //         break;
// //       default:
// //         return;
// //     }

// //     await updateUserStatus(userId, action);
// //     alert(message);
// //     fetchUsers();
// //   } catch (error) {
// //     setError(error.message);
// //   }
// // };

// //   useEffect(() => {
// //     fetchUsers();
// //   }, [pagination.page, searchTerm]);

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     setPagination(prev => ({ ...prev, page: 1 }));
// //     fetchUsers();
// //   };

// //   return (
// //     <div className="flex h-screen">
// //       <AdminSidebar />
      
// //       <div className="flex-1 overflow-y-auto p-8 ml-64">
// //         <h1 className="text-2xl font-bold text-gray-900 mb-6">User Management</h1>
        
// //         {/* Search Bar */}
// //         <form onSubmit={handleSearch} className="mb-6">
// //           <div className="flex">
// //             <input
// //               type="text"
// //               placeholder="Search by name, email or phone..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
// //             />
// //             <button
// //               type="submit"
// //               className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700"
// //             >
// //               Search
// //             </button>
// //           </div>
// //         </form>

// //         {error && (
// //           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
// //             {error}
// //           </div>
// //         )}

// //         {loading ? (
// //           <div className="flex justify-center items-center h-64">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
// //           </div>
// //         ) : (
// //           <>
// //             {/* Users Table */}
// //             <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
// //               <table className="min-w-full divide-y divide-gray-200">
// //                 <thead className="bg-gray-50">
// //                   <tr>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notifications</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>

// //                   </tr>
// //                 </thead>
// //                 <tbody className="bg-white divide-y divide-gray-200">
// //                   {users.map((user) => (
// //                     <tr key={user.id} className="hover:bg-gray-50">
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="flex items-center">
// //                           {user.profile_picture ? (
// //                             <img 
// //                               className="h-10 w-10 rounded-full object-cover" 
// //                               src={user.profile_picture} 
// //                               alt={user.name}
// //                             />
// //                           ) : (
// //                             <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
// //                               <span className="text-gray-500">{user.name.charAt(0)}</span>
// //                             </div>
// //                           )}
// //                           <div className="ml-4">
// //                             <div className="text-sm font-medium text-gray-900">{user.name}</div>
// //                             <div className="text-sm text-gray-500">ID: {user.id}</div>
// //                           </div>
// //                         </div>
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="text-sm text-gray-900">{user.email}</div>
// //                         <div className="text-sm text-gray-500">{user.phone_number}</div>
// //                       </td>
// //                       <td className="px-6 py-4">
// //                         {user.address ? (
// //                           <>
// //                             <div className="text-sm text-gray-900">{user.address.street}</div>
// //                             <div className="text-sm text-gray-500">
// //                               {user.address.city}, {user.address.state}, {user.address.country}
// //                             </div>
// //                           </>
// //                         ) : (
// //                           <span className="text-sm text-gray-500">No address</span>
// //                         )}
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="flex flex-col space-y-1">
// //                           <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
// //                             user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
// //                           }`}>
// //                             {user.is_active ? 'Active' : 'Inactive'}
// //                           </span>
// //                           <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
// //                             user.is_verified ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
// //                           }`}>
// //                             {user.is_verified ? 'Verified' : 'Unverified'}
// //                           </span>
// //                           {user.deactivated_at && (
// //                             <span className="text-xs text-gray-500">
// //                               Deactivated: {new Date(user.deactivated_at).toLocaleDateString()}
// //                             </span>
// //                           )}
// //                         </div>
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         {user.notification_settings ? (
// //                           <div className="flex flex-col space-y-1">
// //                             <span className={`text-xs ${
// //                               user.notification_settings.email_notifications ? 'text-green-600' : 'text-gray-500'
// //                             }`}>
// //                               {user.notification_settings.email_notifications ? '✓ Email' : '✗ Email'}
// //                             </span>
// //                             <span className={`text-xs ${
// //                               user.notification_settings.push_notifications ? 'text-green-600' : 'text-gray-500'
// //                             }`}>
// //                               {user.notification_settings.push_notifications ? '✓ Push' : '✗ Push'}
// //                             </span>
// //                           </div>
// //                         ) : (
// //                           <span className="text-xs text-gray-500">No settings</span>
// //                         )}
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                         {new Date(user.created_at).toLocaleDateString()}
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //   <div className="flex items-center">
// //     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
// //       user.account_status === 'active' ? 'bg-green-100 text-green-800' :
// //       user.account_status === 'suspended' ? 'bg-yellow-100 text-yellow-800' :
// //       'bg-red-100 text-red-800'
// //     }`}>
// //       {user.account_status}
// //     </span>
// //     <button 
// //       onClick={() => handleStatusChange(user.id, user.account_status)}
// //       className="ml-2 text-xs text-purple-600 hover:text-purple-900"
// //     >
// //       {user.account_status === 'active' ? 'Suspend' :
// //        user.account_status === 'suspended' ? 'Reinstate' :
// //        'Reinstate'}
// //     </button>
// //   </div>
// // </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>

// //             {/* Pagination */}
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-sm text-gray-700">
// //                   Showing <span className="font-medium">{(pagination.page - 1) * pagination.limit + 1}</span> to{' '}
// //                   <span className="font-medium">{Math.min(pagination.page * pagination.limit, pagination.total)}</span> of{' '}
// //                   <span className="font-medium">{pagination.total}</span> users
// //                 </p>
// //               </div>
// //               <div className="flex space-x-2">
// //                 <button
// //                   onClick={() => setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }))}
// //                   disabled={pagination.page === 1}
// //                   className="px-4 py-2 border rounded-md disabled:opacity-50"
// //                 >
// //                   Previous
// //                 </button>
// //                 <button
// //                   onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
// //                   disabled={pagination.page * pagination.limit >= pagination.total}
// //                   className="px-4 py-2 border rounded-md disabled:opacity-50"
// //                 >
// //                   Next
// //                 </button>
// //               </div>
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState, useEffect } from 'react';
// import { getAdminUsers, updateUserStatus } from '../../utils/api';
// import AdminSidebar from '../../components/AdminSidebar';

// export default function UserManagement() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [pagination, setPagination] = useState({
//     page: 1,
//     limit: 10,
//     total: 0
//   });

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const data = await getAdminUsers(pagination.page, pagination.limit, searchTerm);
//       setUsers(data.data);
//       setPagination(prev => ({ ...prev, total: data.total }));
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (userId, newStatus) => {
//     try {
//       let action;
//       let message;
      
//       switch(newStatus) {
//         case 'active':
//           action = 'reinstate';
//           message = 'User activated successfully';
//           break;
//         case 'suspended':
//           action = 'suspend';
//           message = 'User suspended successfully';
//           break;
//         case 'banned':
//           action = 'ban';
//           message = 'User banned successfully';
//           break;
//         default:
//           return;
//       }

//       if (!confirm(`Are you sure you want to ${action} this user?`)) return;

//       await updateUserStatus(userId, action);
//       alert(message);
//       fetchUsers();
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, [pagination.page, searchTerm]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setPagination(prev => ({ ...prev, page: 1 }));
//     fetchUsers();
//   };

//   return (
//     <div className="flex h-screen">
//       <AdminSidebar />
      
//       <div className="flex-1 overflow-y-auto p-8 ml-64">
//         <h1 className="text-2xl font-bold text-gray-900 mb-6">User Management</h1>
        
//         {/* Search Bar */}
//         <form onSubmit={handleSearch} className="mb-6">
//           <div className="flex">
//             <input
//               type="text"
//               placeholder="Search by name, email or phone..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//             <button
//               type="submit"
//               className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700"
//             >
//               Search
//             </button>
//           </div>
//         </form>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//             {error}
//           </div>
//         )}

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//           </div>
//         ) : (
//           <>
//             {/* Users Table */}
//             <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notifications</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Status</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {users.map((user) => (
//                     <tr key={user.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           {user.profile_picture ? (
//                             <img 
//                               className="h-10 w-10 rounded-full object-cover" 
//                               src={user.profile_picture} 
//                               alt={user.name}
//                             />
//                           ) : (
//                             <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
//                               <span className="text-gray-500">{user.name.charAt(0)}</span>
//                             </div>
//                           )}
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                             <div className="text-sm text-gray-500">ID: {user.id}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{user.email}</div>
//                         <div className="text-sm text-gray-500">{user.phone_number}</div>
//                       </td>
//                       <td className="px-6 py-4">
//                         {user.address ? (
//                           <>
//                             <div className="text-sm text-gray-900">{user.address.street}</div>
//                             <div className="text-sm text-gray-500">
//                               {user.address.city}, {user.address.state}, {user.address.country}
//                             </div>
//                           </>
//                         ) : (
//                           <span className="text-sm text-gray-500">No address</span>
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex flex-col space-y-1">
//                           <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                           }`}>
//                             {user.is_active ? 'Active' : 'Inactive'}
//                           </span>
//                           <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             user.is_verified ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
//                           }`}>
//                             {user.is_verified ? 'Verified' : 'Unverified'}
//                           </span>
//                           {user.deactivated_at && (
//                             <span className="text-xs text-gray-500">
//                               Deactivated: {new Date(user.deactivated_at).toLocaleDateString()}
//                             </span>
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {user.notification_settings ? (
//                           <div className="flex flex-col space-y-1">
//                             <span className={`text-xs ${
//                               user.notification_settings.email_notifications ? 'text-green-600' : 'text-gray-500'
//                             }`}>
//                               {user.notification_settings.email_notifications ? '✓ Email' : '✗ Email'}
//                             </span>
//                             <span className={`text-xs ${
//                               user.notification_settings.push_notifications ? 'text-green-600' : 'text-gray-500'
//                             }`}>
//                               {user.notification_settings.push_notifications ? '✓ Push' : '✗ Push'}
//                             </span>
//                           </div>
//                         ) : (
//                           <span className="text-xs text-gray-500">No settings</span>
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {new Date(user.created_at).toLocaleDateString()}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center space-x-2">
//                           <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             user.account_status === 'active' ? 'bg-green-100 text-green-800' :
//                             user.account_status === 'suspended' ? 'bg-yellow-100 text-yellow-800' :
//                             'bg-red-100 text-red-800'
//                           }`}>
//                             {user.account_status.charAt(0).toUpperCase() + user.account_status.slice(1)}
//                           </span>
//                           <select
//                             value={user.account_status}
//                             onChange={(e) => handleStatusUpdate(user.id, e.target.value)}
//                             className="text-xs border rounded p-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
//                           >
//                             <option value="active">Active</option>
//                             <option value="suspended">Suspend</option>
//                             <option value="banned">Ban</option>
//                           </select>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-700">
//                   Showing <span className="font-medium">{(pagination.page - 1) * pagination.limit + 1}</span> to{' '}
//                   <span className="font-medium">{Math.min(pagination.page * pagination.limit, pagination.total)}</span> of{' '}
//                   <span className="font-medium">{pagination.total}</span> users
//                 </p>
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }))}
//                   disabled={pagination.page === 1}
//                   className="px-4 py-2 border rounded-md disabled:opacity-50"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
//                   disabled={pagination.page * pagination.limit >= pagination.total}
//                   className="px-4 py-2 border rounded-md disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from 'react';
import { getAdminUsers, updateUserStatus } from '../../utils/api';
import AdminSidebar from '../../components/AdminSidebar';
import { FiSearch, FiChevronLeft, FiChevronRight, FiUser, FiMail, FiPhone, FiMapPin, FiBell, FiClock, FiCheck, FiX } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';


export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAction, setSelectedAction] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAdminUsers(pagination.page, pagination.limit, searchTerm);
      setUsers(data.data);
      setPagination(prev => ({ ...prev, total: data.total }));
      setError(null);
    } catch (err) {
      setError(err.message);
      toast.error(`Failed to fetch users: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const openConfirmationModal = (userId, newStatus) => {
    setSelectedUser(userId);
    setSelectedAction(newStatus);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
    setSelectedAction('');
  };

  const handleStatusUpdate = async () => {
    try {
      let action;
      let message;
      
      switch(selectedAction) {
        case 'active':
          action = 'reinstate';
          message = 'User activated successfully';
          break;
        case 'suspended':
          action = 'suspend';
          message = 'User suspended successfully';
          break;
        case 'banned':
          action = 'ban';
          message = 'User banned successfully';
          break;
        default:
          return;
      }

      await updateUserStatus(selectedUser, action);
      toast.success(message);
      fetchUsers();
      closeModal();
    } catch (error) {
      toast.error(`Failed to update user status: ${error.message}`);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [pagination.page, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '' || searchTerm.length >= 2) {
      setPagination(prev => ({ ...prev, page: 1 }));
      fetchUsers();
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'suspended': return 'bg-yellow-100 text-yellow-800';
      case 'banned': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionText = (action) => {
    switch(action) {
      case 'active': return 'activate';
      case 'suspended': return 'suspend';
      case 'banned': return 'ban';
      default: return '';
    }
  };

  return (
    <div className="flex h-screen bg-white" id="root">
      <AdminSidebar />
      
      <div className="flex-1 overflow-y-auto p-8 ml-64 bg-white">
        <ToastContainer position="top-right" autoClose={5000} />
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              {pagination.total} users total
            </span>
          </div>
        </div>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              minLength={2}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setPagination(prev => ({ ...prev, page: 1 }));
                  fetchUsers();
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FiX className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
          {searchTerm.length === 1 && (
            <p className="mt-1 text-xs text-red-500">Please enter at least 2 characters</p>
          )}
        </form>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <FiX className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <>
            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {user.profile_picture ? (
                              <img 
                                className="h-10 w-10 rounded-full object-cover" 
                                src={user.profile_picture} 
                                alt={user.name}
                              />
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                <span className="text-purple-600 font-medium">{user.name.charAt(0)}</span>
                              </div>
                            )}
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-xs text-gray-500">ID: {user.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-sm text-gray-900">
                            <FiMail className="mr-2 text-gray-400" />
                            {user.email || 'N/A'}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <FiPhone className="mr-2 text-gray-400" />
                            {user.phone_number || 'N/A'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col space-y-2">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {user.is_active ? 'Active' : 'Inactive'}
                            </span>
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.is_verified ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {user.is_verified ? 'Verified' : 'Unverified'}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full mb-2 ${getStatusColor(user.account_status)}`}>
                              {user.account_status.charAt(0).toUpperCase() + user.account_status.slice(1)}
                            </span>
                            <div className="flex items-center text-xs text-gray-500">
                              <FiClock className="mr-1" />
                              {new Date(user.created_at).toLocaleDateString()}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={user.account_status}
                            onChange={(e) => openConfirmationModal(user.id, e.target.value)}
                            className="text-black block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                          >
                            <option value="active">Active</option>
                            <option value="suspended">Suspend</option>
                            <option value="banned">Ban</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-2">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{(pagination.page - 1) * pagination.limit + 1}</span> to{' '}
                  <span className="font-medium">{Math.min(pagination.page * pagination.limit, pagination.total)}</span> of{' '}
                  <span className="font-medium">{pagination.total}</span> users
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }))}
                  disabled={pagination.page === 1}
                  className={`px-4 py-2 border rounded-md flex items-center ${pagination.page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                >
                  <FiChevronLeft className="mr-1" /> Previous
                </button>
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                  disabled={pagination.page * pagination.limit >= pagination.total}
                  className={`px-4 py-2 border rounded-md flex items-center ${pagination.page * pagination.limit >= pagination.total ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                >
                  Next <FiChevronRight className="ml-1" />
                </button>
              </div>
            </div>
          </>
        )}

        {/* Confirmation Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Confirmation Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Action</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to {getActionText(selectedAction)} this user? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleStatusUpdate}
                className={`px-4 py-2 rounded-md text-white ${
                  selectedAction === 'banned' ? 'bg-red-600 hover:bg-red-700' :
                  selectedAction === 'suspended' ? 'bg-yellow-600 hover:bg-yellow-700' :
                  'bg-green-600 hover:bg-green-700'
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      </div>

      <style jsx global>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 0;
          border-radius: 8px;
          outline: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
}