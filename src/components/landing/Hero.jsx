'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const HERO_IMG = 'https://media.base44.com/images/public/6a4ea92b109c6fb971d96f25/344513db5_generated_ae33d918.png';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative h-screen min-h-175 w-full overflow-hidden bg-void noise-overlay"
        >
            {/* Background image with parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: imgY, scale: 1.1 }}
            >
                {/* <Image
                    src={HERO_IMG}
                    alt="Atleta em pico de esforço"
                    className="w-full h-full object-contain object-center"
                /> */}
                <div className="absolute inset-0 bg-linear-to-r from-void via-void/60 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-void via-transparent to-void/40" />
            </motion.div>

            {/* Grid pattern */}
            <div className="absolute inset-0 z-[1] grid-pattern opacity-60" />

            {/* Content */}
            <motion.div
                className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-12 pb-16 lg:pb-24"
                style={{ y: textY }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex items-center gap-4 mb-6"
                >
                    <span className="w-12 h-px bg-velocity" />
                    <span className="text-xs font-heading font-bold tracking-[0.3em] text-velocity">
                        TREINO DE ALTA PERFORMANCE
                    </span>
                </motion.div>

                {/* Split headline */}
                <h1 className="font-display leading-[0.85] tracking-tight">
                    <motion.span
                        className="block text-outline text-[18vw] lg:text-[15vw]"
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={{ clipPath: 'inset(0 0 0 0)' }}
                        transition={{ delay: 0.4, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                    >
                        SAÚDE
                    </motion.span>
                    <motion.span
                        className="block text-velocity text-[18vw] lg:text-[15vw]"
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={{ clipPath: 'inset(0 0 0 0)' }}
                        transition={{ delay: 0.7, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                    >
                        FIT
                    </motion.span>
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
                >
                    <p className="text-lg lg:text-xl text-white/70 max-w-md font-light leading-relaxed">
                        Transforme seu corpo, sua mente e sua performance. Treinos
                        personalizados, acompanhamento profissional e resultados reais.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#membership"
                            className="group relative bg-velocity text-white px-8 py-4 font-heading font-bold tracking-wider text-sm overflow-hidden"
                        >
                            <span className="relative z-10">AGENDAR AULA EXPERIMENTAL</span>
                            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="absolute inset-0 z-10 flex items-center justify-center text-void translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-heading font-bold tracking-wider text-sm">
                                COMEÇAR AGORA
                            </span>
                        </a>
                        <a
                            href="#programs"
                            className="border border-white/20 text-white px-8 py-4 font-heading font-bold tracking-wider text-sm hover:border-velocity hover:text-velocity transition-colors"
                        >
                            VER PROGRAMAS
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Live pulse SVG */}
            <motion.div
                className="absolute bottom-0 right-0 z-10 w-full lg:w-1/2 h-24 pointer-events-none"
                style={{ opacity: overlayOpacity }}
            >
                <svg
                    viewBox="0 0 800 100"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <motion.path
                        d="M0,50 L150,50 L170,50 L180,10 L195,90 L210,20 L225,50 L400,50 L420,50 L430,15 L445,85 L460,50 L800,50"
                        fill="none"
                        stroke="#FF002E"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.3, duration: 2, repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
                    />
                </svg>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                style={{ opacity: overlayOpacity }}
            >
                <span className="text-[10px] font-heading font-bold tracking-[0.3em] text-white/40">
                    SCROLL
                </span>
                <motion.div
                    className="w-px h-12 bg-linear-to-b from-velocity to-transparent"
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ transformOrigin: 'top' }}
                />
            </motion.div>

            {/* Stats bar */}
            <motion.div
                className="absolute top-1/2 right-6 lg:right-12 -translate-y-1/2 z-10 hidden md:flex flex-col gap-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
            >
                {[
                    { num: '+5K', label: 'ALUNOS' },
                    { num: '+10', label: 'ANOS' },
                    { num: '+20', label: 'PROFESSORES' },
                ].map((s) => (
                    <div key={s.label} className="text-right">
                        <div className="font-display text-3xl text-velocity">{s.num}</div>
                        <div className="text-[10px] font-heading tracking-widest text-white/40">
                            {s.label}
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
