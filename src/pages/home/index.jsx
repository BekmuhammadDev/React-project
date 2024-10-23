import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";

import HeroSection from '@components/page-sections/home/hero-section';
import FeaturesSection from '@components/page-sections/home/Features-Section';
import UIkitSection from '@components/page-sections/home/UIkit-Section';
import ComponentsSection from '@components/page-sections/home/Components-Section';
import CodeSection from '@components/page-sections/home/Code-Section';
import LegalSection from '@components/page-sections/home/Legal-Section';
import ModularUi from "@components/page-sections/ModularUiKit-Section"


const index = () => {

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UIkitSection />
        <ComponentsSection />
        <CodeSection />
        <LegalSection />
        <ModularUi />
      </main>
      <Footer />
    </>
  )
}

export default index;