import React from 'react'
import { Layout } from 'antd'
import CustomHeader from './Header'
import CustomFooter from './Footer'
const { Content } = Layout

function CustomLayout ({ children }) {
  return (
    <Layout>
      <CustomHeader />
      <Content>{children}</Content>
      <CustomFooter />
    </Layout>
  )
}

export default CustomLayout
