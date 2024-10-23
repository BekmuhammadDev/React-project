import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import ErrorSection from "@components/page-sections/error/Error-Section"
import ModularUi from "@components/page-sections/ModularUiKit-Section"


const index = () => {
  return (
    <>
      <Header />
      <main>
        <ErrorSection />
        <ModularUi />
      </main>
      <Footer />
    </>
  )
}

export default index;