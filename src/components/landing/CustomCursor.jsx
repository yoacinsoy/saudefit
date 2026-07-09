'use client'

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [hidden, setHidden] = useState(true);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        if (window.innerWidth < 1024) return;

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setHidden(false);
            const el = e.target;
            setIsPointer(
                el.closest('a, button, [role="button"], .cursor-focus') !== null
            );
        };

        const leave = () => setHidden(true);

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseleave', leave);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseleave', leave);
        };
    }, [cursorX, cursorY]);

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 1024);
    }, []);

    if (!isDesktop) return null;

    return (
        <>
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:block"
                style={{ x, y }}
                animate={{ opacity: hidden ? 0 : 1 }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="rounded-full bg-velocity"
                    animate={{
                        width: isPointer ? 48 : 8,
                        height: isPointer ? 48 : 8,
                        marginLeft: isPointer ? -24 : -4,
                        marginTop: isPointer ? -24 : -4,
                    }}
                    transition={{ type: 'spring', damping: 20, stiffness: 400 }}
                />
            </motion.div>
            {/* Focus ring */}
            <motion.div
                className="fixed top-0 left-0 z-[9998] pointer-events-none hidden lg:block"
                style={{ x, y }}
                animate={{ opacity: isPointer && !hidden ? 1 : 0 }}
                transition={{ duration: 0.15 }}
            >
                <div
                    className="rounded-full border border-velocity flex items-center justify-center"
                    style={{ width: 48, height: 48, marginLeft: -24, marginTop: -24 }}
                >
                    <span className="text-[8px] font-heading font-bold tracking-widest text-velocity">
                        FOCUS
                    </span>
                </div>
            </motion.div>
        </>
    );
}
