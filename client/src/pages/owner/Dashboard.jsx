import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex-1 p-6 bg-gray-50'>
      <h1 className='text-2xl font-semibold mb-6'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded-lg shadow-sm border'>
          <h3 className='text-lg font-medium mb-2'>Total Cars</h3>
          <p className='text-3xl font-bold text-blue-600'>0</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-sm border'>
          <h3 className='text-lg font-medium mb-2'>Active Bookings</h3>
          <p className='text-3xl font-bold text-green-600'>0</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-sm border'>
          <h3 className='text-lg font-medium mb-2'>Monthly Revenue</h3>
          <p className='text-3xl font-bold text-purple-600'>$0</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
