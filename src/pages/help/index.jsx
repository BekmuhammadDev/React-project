import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import HelpSection from "@components/page-sections/help/Help-section"
import FaqSection from "@components/page-sections/help/Faq-Section"
import ModularUi from "@components/page-sections/ModularUiKit-Section"



const index = () => {
    return (
        <>
            <Header />
            <main>
                <HelpSection />
                <FaqSection />
                <ModularUi />
            </main>
            <Footer />
        </>
    );
};

export default index;