'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROGRAMS = [
    {
        num: '01',
        title: 'MUSCULAÇÃO',
        subtitle: 'Força & Hipertrofia',
        description:
            'Treinamento de força progressiva com acompanhamento individualizado. Construa músculos, aumente sua potência e defina seu físico com metodologia comprovada.',
        img: 'https://media.base44.com/images/public/6a4ea92b109c6fb971d96f25/27ca9a50d_generated_d9543556.png',
        stats: ['Período: 45-60 min', 'Foco: Hipertrofia', 'Nível: Todos'],
    },
    {
        num: '02',
        title: 'HIIT',
        subtitle: 'Queima & Resistência',
        description:
            'Alta intensidade em intervalos curtos. Maximize a queima calórica, eleve seu condicionamento cardiovascular e alcance resultados em tempo recorde.',
        img: 'https://media.base44.com/images/public/6a4ea92b109c6fb971d96f25/aab4a0658_generated_4064dfce.png',
        stats: ['Período: 30-40 min', 'Foco: Cardio', 'Nível: Intermediário+'],
    },
    {
        num: '03',
        title: 'RECUPERAÇÃO',
        subtitle: 'Bem-estar & Mobilidade',
        description:
            'Sessões de recuperação ativa, mobilidade e alongamento. Previna lesões, melhore sua amplitude de movimento e mantenha seu corpo pronto para o próximo treino.',
        img: 'https://media.base44.com/images/public/6a4ea92b109c6fb971d96f25/980475b9c_generated_54d11aa0.png',
        stats: ['Período: 30 min', 'Foco: Mobilidade', 'Nível: Todos'],
    },
];

export default function Programs() {
    const [hovered, setHovered] = useState(null);

    return (
        <section
            id="programs"
            className="relative bg-void py-24 lg:py-32 overflow-hidden noise-overlay"
        >
            {/* Background giant text */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none">
                <motion.h2
                    className="font-display text-[20vw] leading-none text-white/[0.03] whitespace-nowrap"
                    animate={{ x: ['-10%', '-30%', '-10%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                    PERFORMANCE · PERFORMANCE · PERFORMANCE
                </motion.h2>
            </div>

            <div className="relative z-10 px-6 lg:px-12">
                {/* Section header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-24">
                    <div>
                        <motion.div
                            className="flex items-center gap-4 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="w-12 h-px bg-velocity" />
                            <span className="text-xs font-heading font-bold tracking-[0.3em] text-velocity">
                                ANATOMIA DA PERFORMANCE
                            </span>
                        </motion.div>
                        <motion.h2
                            className="font-display text-5xl lg:text-7xl leading-[0.9] tracking-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            MÓDULOS DE<br />
                            <span className="text-velocity">TRANSFORMAÇÃO</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-white/50 max-w-sm text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Cada programa é um módulo de mudança. Escolha seu caminho e evolua
                        com método, disciplina e acompanhamento profissional.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-steel/30">
                    {PROGRAMS.map((p, i) => (
                        <motion.div
                            key={p.num}
                            className="shutter-card group relative bg-void cursor-focus"
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                        >
                            <div className="relative z-10 p-8 lg:p-10 min-h-[560px] flex flex-col">
                                {/* Number */}
                                <div className="flex items-start justify-between mb-8">
                                    <span className="font-display text-6xl text-white/10 group-hover:text-white/30 transition-colors">
                                        {p.num}
                                    </span>
                                    <ArrowUpRight
                                        size={28}
                                        className="text-white/30 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                                    />
                                </div>

                                {/* Image */}
                                <div className="relative h-44 mb-8 overflow-hidden">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-3xl lg:text-4xl mb-2 group-hover:text-white transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-xs font-heading font-bold tracking-widest text-velocity mb-4">
                                    {p.subtitle}
                                </p>
                                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow group-hover:text-white/80 transition-colors">
                                    {p.description}
                                </p>

                                {/* Stats */}
                                <ul className="space-y-2 mb-6">
                                    {p.stats.map((s) => (
                                        <li
                                            key={s}
                                            className="flex items-center gap-3 text-xs text-white/40 group-hover:text-white/70 transition-colors"
                                        >
                                            <span className="w-1 h-1 bg-velocity rounded-full" />
                                            {s}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="#membership"
                                    className="relative z-20 inline-flex items-center gap-2 text-sm font-heading font-bold tracking-wider text-white border-b border-velocity pb-1 w-fit group-hover:gap-4 transition-all"
                                >
                                    AGENGAR AULA
                                    <ArrowUpRight size={16} className="text-velocity" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
