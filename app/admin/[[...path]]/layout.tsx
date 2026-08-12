import AdminLayout from '@/ecommerch/ui/admin/AdminLayout';
import React from 'react'

function layout({children}: any) {
  return (
    <div>
      <AdminLayout>
{children}
      </AdminLayout>
    </div>
  )
}

export default layout
