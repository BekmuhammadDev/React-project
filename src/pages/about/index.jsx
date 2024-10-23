import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { AboutSection, WorkSection, CardSection, PartnersSection } from '@/components/page-sections/about';
import ModularUi from "@components/page-sections/ModularUiKit-Section"


const index = () => {
    return (
        <>
            <Header />
            <main>
                <AboutSection />
                <WorkSection />
                <CardSection />
                <PartnersSection />
                <ModularUi />
            </main>

            <Footer />

        </>
    );
};

export default index;