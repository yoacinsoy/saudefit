'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const PLANS = [
    {
        name: 'STARTER',
        price: '149',
        period: '/mês',
        description: 'Comece sua jornada com acesso completo à estrutura.',
        features: [
            'Acesso à musculação',
            'Avaliação física inicial',
            'Plano de treino básico',
            'Horário livre',
        ],
        highlight: false,
    },
    {
        name: 'PERFORMANCE',
        price: '249',
        period: '/mês',
        description: 'Acompanhamento profissional e treinos personalizados.',
        features: [
            'Tudo do plano Starter',
            'Professor dedicado',
            'Treino personalizado',
            'Aulas de HIIT inclusas',
            'Reavaliação mensal',
        ],
        highlight: true,
    },
    {
        name: 'ELITE',
        price: '399',
        period: '/mês',
        description: 'Experiência premium com acompanhamento total.',
        features: [
            'Tudo do plano Performance',
            'Nutricionista esportivo',
            'Sessões de recuperação',
            'Acompanhamento diário',
            'Acesso 24h',
        ],
        highlight: false,
    },
];

export default function Membership() {
    const [hovered, setHovered] = useState(null);

    return (
        <section
            id="membership"
            className="relative bg-void py-24 lg:py-32 overflow-hidden noise-overlay"
        >
            {/* Red fill on hover */}
            <motion.div
                className="absolute inset-0 z-0 bg-velocity"
                animate={{ opacity: hovered !== null ? 0.08 : 0 }}
                transition={{ duration: 0.4 }}
            />

            <div className="relative z-10 px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        className="flex items-center justify-center gap-4 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="w-12 h-px bg-velocity" />
                        <span className="text-xs font-heading font-bold tracking-[0.3em] text-velocity">
                            O LIMIAR
                        </span>
                        <span className="w-12 h-px bg-velocity" />
                    </motion.div>
                    <motion.h2
                        className="font-display text-5xl lg:text-7xl leading-[0.9] tracking-tight mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        ESCOLHA SEU<br />
                        <span className="text-velocity">PLANO</span>
                    </motion.h2>
                    <motion.p
                        className="text-white/50 max-w-xl mx-auto text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Sem contratos complicados. Escolha o plano que combina com você e
                        comece sua transformação hoje.
                    </motion.p>
                </div>

                {/* Plans */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-px">
                    {PLANS.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            className={`relative group cursor-focus transition-all duration-500 ${plan.highlight
                                    ? 'bg-velocity'
                                    : 'bg-steel/40 hover:bg-steel'
                                } ${hovered === i ? 'lg:scale-105' : ''}`}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: i * 0.12, duration: 0.6 }}
                        >
                            <div className="p-8 lg:p-10 flex flex-col h-full border border-white/10">
                                {plan.highlight && (
                                    <span className="absolute top-0 right-0 bg-void text-velocity text-[10px] font-heading font-bold tracking-widest px-4 py-2">
                                        MAIS ESCOLHIDO
                                    </span>
                                )}

                                <h3
                                    className={`font-display text-3xl mb-2 ${plan.highlight ? 'text-void' : 'text-white'
                                        }`}
                                >
                                    {plan.name}
                                </h3>
                                <p
                                    className={`text-sm mb-8 ${plan.highlight ? 'text-void/70' : 'text-white/50'
                                        }`}
                                >
                                    {plan.description}
                                </p>

                                {/* Price */}
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span
                                        className={`text-sm ${plan.highlight ? 'text-void/70' : 'text-white/50'
                                            }`}
                                    >
                                        R$
                                    </span>
                                    <span
                                        className={`font-display text-6xl lg:text-7xl ${plan.highlight ? 'text-void' : 'text-white'
                                            }`}
                                    >
                                        {plan.price}
                                    </span>
                                    <span
                                        className={`text-sm ${plan.highlight ? 'text-void/70' : 'text-white/50'
                                            }`}
                                    >
                                        {plan.period}
                                    </span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((f) => (
                                        <li
                                            key={f}
                                            className={`flex items-center gap-3 text-sm ${plan.highlight ? 'text-void/80' : 'text-white/60'
                                                }`}
                                        >
                                            <Check
                                                size={16}
                                                className={
                                                    plan.highlight ? 'text-void' : 'text-velocity'
                                                }
                                            />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20no%20plano%20"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`relative w-full flex items-center justify-center gap-2 py-4 font-heading font-bold tracking-wider text-sm overflow-hidden group/btn ${plan.highlight
                                            ? 'bg-void text-white'
                                            : 'bg-velocity text-white'
                                        }`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        MATRICULAR-SE
                                        <ArrowRight
                                            size={16}
                                            className="group-hover/btn:translate-x-1 transition-transform"
                                        />
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trial CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-white/50 text-sm mb-4">
                        Ainda na dúvida? Experimente antes de decidir.
                    </p>
                    <a
                        href="https://wa.me/5511999999999?text=Olá!%20Quero%20agendar%20uma%20aula%20experimental"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-velocity font-heading font-bold tracking-wider text-sm border-b-2 border-velocity pb-1 hover:gap-6 transition-all"
                    >
                        AGENGAR AULA EXPERIMENTAL GRATUITA
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
