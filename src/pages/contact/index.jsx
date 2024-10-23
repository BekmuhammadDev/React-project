import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import ContactSection from '@components/page-sections/contact/Contact-section';
import ContactFormSection from '@components/page-sections/contact/ContactForm-section';
import ModularUi from "@components/page-sections/ModularUiKit-Section"


const index = () => {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
        <ContactFormSection />
        <ModularUi />
      </main>
      <Footer />
    </>
  )
}

export default index;