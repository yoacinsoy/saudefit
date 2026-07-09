import React from 'react';
import CustomCursor from '@/components/landing/CustomCursor';
import ScrollProgress from '@/components/landing/ScrollProgress';
import NavOverlay from '@/components/landing/NavOverlay';
import Hero from '@/components/landing/Hero';
import Philosophy from '@/components/landing/Philosophy';
import Programs from '@/components/landing/Programs';
import Results from '@/components/landing/Results';
import Membership from '@/components/landing/Membership';
import Footer from '@/components/landing/Footer';

export default function Home() {
    return (
        <main className="relative bg-void text-white">
            <CustomCursor />
            <ScrollProgress />
            <NavOverlay />
            <Hero />
            <Philosophy />
            <Programs />
            <Results />
            <Membership />
            <Footer />
        </main>
    );
}
