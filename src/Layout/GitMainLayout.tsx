import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function GitMainLayout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default GitMainLayout
