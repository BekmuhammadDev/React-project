import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import "./style.scss"
import LegalSection from "@components/page-sections/legal/Legal-Section"
import IntroSection from "@components/page-sections/legal/Intro-Section"
import ModularUi from "@components/page-sections/ModularUiKit-Section"

const index = () => {
    return (
        <>
            <Header />
            <main>
                <LegalSection />
                <IntroSection />
                <ModularUi />
            </main>
            <Footer />
        </>
    );
};

export default index;