import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import ProductSection from '@components/page-sections/product/Product-page';
import FeatureCards from '@components/page-sections/product/Feature-Cards';
import ComponentSection from '@components/page-sections/product/Component-Section';
import UIKitSection from '@components/page-sections/product/UIKit-Section';
import AmazingSection from '@components/page-sections/product/Amazing-Section';
import ModularUi from "@components/page-sections/ModularUiKit-Section"

const index = () => {
  return (
    <>
      <Header />
      <ProductSection />
      <FeatureCards />
      <ComponentSection />
      <UIKitSection />
      <AmazingSection />
      <ModularUi/>
      <Footer />
    </>
  )
}

export default index; 