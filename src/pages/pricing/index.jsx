import React from 'react';
import { Header, Footer } from '@/components/layouts';
import "./style.scss"

import PricingSection from "@components/page-sections/pricing/Pricing-Section"
import ToogleSection from "@components/page-sections/pricing/Toogle-section"
import FeatureSection from "@components/page-sections/pricing/Feature-Card"
import FaqSection from "@components/page-sections/pricing/FAQ-Section"
import CallSection from "@components/page-sections/pricing/Call-section"
import ModularUi from "@components/page-sections/ModularUiKit-Section"

const index = () => {
  return (
    <>
      <Header />
      <PricingSection/>
      <ToogleSection/>
      <FeatureSection/>
      <FaqSection/>
      <CallSection/>
      <ModularUi/>
      <Footer />
    </>
  )
}

export default index;