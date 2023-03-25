import React, { useEffect } from 'react';
import HeroSection from '@components/herosection'
import Features from '@components/features'
import FeatureIllustration from '@components/featureIllustration'
import CTASection from '@components/ctaSection'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <>
            <HeroSection />
            <Features />
            <FeatureIllustration />
            <CTASection />
        </>
    )
}

export default Home