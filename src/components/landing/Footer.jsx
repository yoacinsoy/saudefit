'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Globe, Video, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer
            id="footer"
            className="relative bg-void border-t border-steel/40 overflow-hidden noise-overlay"
        >
            <div className="relative px-6 lg:px-12 py-24 lg:py-32 text-center">
                <motion.div
                    className="absolute inset-0 grid-pattern opacity-40"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    viewport={{ once: true }}
                />
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs font-heading font-bold tracking-[0.3em] text-velocity mb-6">
                        SUA TRANSFORMAÇÃO COMEÇA AGORA
                    </p>
                    <h2 className="font-display text-5xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
                        PRONTO PARA<br />
                        <span className="text-velocity">COMEÇAR?</span>
                    </h2>
                    <a
                        href="https://wa.me/5511999999999?text=Olá!%20Quero%20fazer%20parte%20da%20Saúde%20Fit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 bg-velocity text-white px-10 py-5 font-heading font-bold tracking-wider text-sm overflow-hidden"
                    >
                        <span className="relative z-10">FAZER PARTE DA SAÚDE FIT</span>
                        <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        <span className="absolute inset-0 z-10 flex items-center justify-center text-void -translate-x-full group-hover:translate-x-0 transition-transform duration-300 font-heading font-bold tracking-wider text-sm gap-3">
                            JUNTAR-SE À ELITE
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Contact info */}
            <div className="relative z-10 border-t border-steel/40 px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-display text-2xl mb-4">
                            <span className="text-white">SAÚDE</span>
                            <span className="text-velocity">FIT</span>
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Mais que uma academia. Um centro de transformação, performance e
                            qualidade de vida.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-heading font-bold tracking-widest text-velocity mb-4">
                            CONTATO
                        </h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-velocity mt-0.5 shrink-0" />
                                <span>Av. Paulista, 1000<br />São Paulo · SP</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-velocity shrink-0" />
                                <span>(11) 99999-9999</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-velocity shrink-0" />
                                <span>contato@saúdefit.com.br</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-xs font-heading font-bold tracking-widest text-velocity mb-4">
                            HORÁRIOS
                        </h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="flex items-center gap-3">
                                <Clock size={16} className="text-velocity shrink-0" />
                                <span>Seg a Sex: 6h — 23h</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={16} className="text-velocity shrink-0" />
                                <span>Sábado: 8h — 20h</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={16} className="text-velocity shrink-0" />
                                <span>Domingo: 9h — 14h</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-heading font-bold tracking-widest text-velocity mb-4">
                            SIGA-NOS
                        </h4>
                        <div className="flex gap-3">
                            {[
                                { icon: Camera, href: 'https://instagram.com' },
                                { icon: Globe, href: 'https://facebook.com' },
                                { icon: Video, href: 'https://youtube.com' },
                            ].map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 border border-steel/60 flex items-center justify-center hover:border-velocity hover:bg-velocity transition-all group"
                                >
                                    <Icon
                                        size={18}
                                        className="text-white/60 group-hover:text-white transition-colors"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-steel/40 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/30">
                        © 2026 Saúde Fit. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-xs text-white/30">
                        <a href="#hero" className="hover:text-velocity transition-colors">
                            Termos de Uso
                        </a>
                        <a href="#hero" className="hover:text-velocity transition-colors">
                            Privacidade
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
