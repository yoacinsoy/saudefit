'use client'

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="fixed right-0 top-0 h-screen w-1 z-50 hidden lg:block bg-steel/40">
            <motion.div
                className="w-full bg-velocity origin-top"
                style={{
                    scaleY,
                    height: '100%',
                    boxShadow: '0 0 15px rgba(255,0,46,0.8)',
                }}
            />
        </div>
    );
}
