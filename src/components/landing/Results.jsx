'use client'

import React from 'react';
import { motion } from 'framer-motion';

const TRANSFORMATIONS = [
    {
        name: 'CARLA M.',
        stat: '-15KG',
        label: 'EM 4 MESES',
        img: 'https://media.base44.com/images/public/6a4ea92b109c6fb971d96f25/ae4b7a9cd_generated_7ea968b2.png',
        quote: 'Superei cada limite que eu achei impossível.',
    },
    {
        name: 'RAFAEL S.',
        stat: '+20%',
        label: 'RESISTÊNCIA',
        img: 'https://media.base44.com/images/public/6a4ea92b109c6fb971d96f25/0d94b0aa0_generated_918a216b.png',
        quote: 'Disciplina que transformou minha vida.',
    },
    {
        name: 'JULIANA R.',
        stat: '+8KG',
        label: 'MASSA MAGRA',
        img: 'https://media.base44.com/images/public/6a4ea92b109c6fb971d96f25/8aab1172e_generated_0c1da18f.png',
        quote: 'Resultados reais, acompanhamento real.',
    },
];

function Card({ t }) {
    return (
        <div className="relative shrink-0 w-[80vw] sm:w-[420px] h-[560px] mx-2 overflow-hidden group">
            <img
                src={t.img}
                alt={t.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />

            {/* Big stat overlay */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none">
                <span className="font-display text-6xl lg:text-7xl text-velocity/90 leading-none drop-shadow-[0_0_20px_rgba(255,0,46,0.5)]">
                    {t.stat}
                </span>
                <p className="text-xs font-heading font-bold tracking-widest text-white/60 mt-2">
                    {t.label}
                </p>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-sm italic mb-3">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-velocity" />
                    <span className="font-heading font-bold tracking-wider text-sm">
                        {t.name}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function Results() {
    const doubled = [...TRANSFORMATIONS, ...TRANSFORMATIONS];

    return (
        <section
            id="results"
            className="relative bg-void py-24 lg:py-32 overflow-hidden noise-overlay"
        >
            {/* Section header */}
            <div className="px-6 lg:px-12 mb-16">
                <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="w-12 h-px bg-velocity" />
                    <span className="text-xs font-heading font-bold tracking-[0.3em] text-velocity">
                        TRACKER DE MOMENTUM
                    </span>
                </motion.div>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <motion.h2
                        className="font-display text-5xl lg:text-7xl leading-[0.9] tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        RESULTADOS<br />
                        <span className="text-velocity">REAIS</span>
                    </motion.h2>
                    <motion.p
                        className="text-white/50 max-w-sm text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Nada de promessas vazias. Veja transformações reais de quem decidiu
                        dar o primeiro passo.
                    </motion.p>
                </div>
            </div>

            {/* Ticker */}
            <div className="relative">
                <div className="flex animate-marquee">
                    {doubled.map((t, i) => (
                        <Card key={i} t={t} />
                    ))}
                </div>
                {/* Fade edges */}
                <div className="absolute top-0 bottom-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-void to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-void to-transparent pointer-events-none z-10" />
            </div>

            {/* KPI strip */}
            <div className="px-6 lg:px-12 mt-20">
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-steel/30 border border-steel/30"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {[
                        { num: '98%', label: 'ALUNOS SATISFEITOS' },
                        { num: '+5K', label: 'TRANSFORMAÇÕES' },
                        { num: '4.9', label: 'AVALIAÇÃO MÉDIA' },
                        { num: '+50', label: 'TREINOS SEMANAIS' },
                    ].map((k) => (
                        <div
                            key={k.label}
                            className="bg-void p-8 flex flex-col items-center text-center group hover:bg-steel/30 transition-colors"
                        >
                            <span className="font-display text-4xl lg:text-5xl text-velocity mb-2 group-hover:scale-110 transition-transform">
                                {k.num}
                            </span>
                            <span className="text-[10px] font-heading font-bold tracking-widest text-white/40">
                                {k.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
