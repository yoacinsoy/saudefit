'use client'

import React from 'react';
import { motion } from 'framer-motion';

const ARCHITECTURE_IMG = 'https://media.base44.com/images/public/6a4ea92b109c6fb971d96f25/ef6336e05_generated_c62e4f7f.png';

export default function Philosophy() {
    return (
        <section className="relative bg-void py-24 lg:py-32 overflow-hidden noise-overlay">
            {/* Background architecture image */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img
                    src={ARCHITECTURE_IMG}
                    alt="Espaço Saúde Fit"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
            </div>

            <div className="relative z-10 px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: text */}
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
                                A FILOSOFIA
                            </span>
                        </motion.div>
                        <motion.h2
                            className="font-display text-4xl lg:text-6xl leading-[0.9] tracking-tight mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            MOVIMENTO É<br />
                            <span className="text-velocity">EMOÇÃO</span>
                        </motion.h2>
                        <motion.p
                            className="text-white/60 text-lg leading-relaxed mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            A Saúde Fit nasceu da convicção de que treinar vai muito além
                            de levantar peso. É sobre disciplina, superação e a busca
                            constante por evolução. Cada espaço foi projetado para potencializar
                            seu desempenho e cada profissional está focado em guiá-lo até
                            resultados reais.
                        </motion.p>
                        <motion.p
                            className="text-white/60 text-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Não vendemos treinos. Construímos transformações.
                        </motion.p>

                        <motion.div
                            className="mt-12 grid grid-cols-2 gap-px bg-steel/30"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {[
                                { title: 'METODOLOGIA', desc: 'Treinos baseados em ciência' },
                                { title: 'ACOMPANHAMENTO', desc: 'Profissionais dedicados' },
                                { title: 'ESTRUTURA', desc: 'Ambiente premium e industrial' },
                                { title: 'RESULTADO', desc: 'Evolução mensurável' },
                            ].map((p) => (
                                <div key={p.title} className="bg-void p-5">
                                    <h4 className="font-heading font-bold text-sm text-velocity mb-1">
                                        {p.title}
                                    </h4>
                                    <p className="text-xs text-white/40">{p.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: image slice reveal */}
                    <motion.div
                        className="relative h-[500px] lg:h-[640px] overflow-hidden"
                        initial={{ clipPath: 'inset(0 0 0 100%)' }}
                        whileInView={{ clipPath: 'inset(0 0 0 0)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
                    >
                        <img
                            src={ARCHITECTURE_IMG}
                            alt="Interior da academia Saúde Fit"
                            className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <span className="font-display text-2xl text-velocity">SAÚDE FIT</span>
                            <p className="text-xs text-white/50 tracking-widest">
                                SÃO PAULO · BRASIL
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
