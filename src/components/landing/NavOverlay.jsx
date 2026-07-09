'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
    { label: 'Início', href: '#hero' },
    { label: 'Programas', href: '#programs' },
    { label: 'Resultados', href: '#results' },
    { label: 'Planos', href: '#membership' },
    { label: 'Contato', href: '#footer' },
];

export default function NavOverlay() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => (document.body.style.overflow = '');
    }, [open]);

    return (
        <>
            {/* Top bar */}
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-5 flex items-center justify-between transition-all duration-500"
                animate={{
                    backgroundColor: scrolled ? 'rgba(10,10,10,0.9)' : 'rgba(10,10,10,0)',
                    backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
                    paddingTop: scrolled ? 12 : 20,
                    paddingBottom: scrolled ? 12 : 20,
                }}
            >
                <a
                    href="#hero"
                    className="font-display text-xl lg:text-2xl tracking-tight flex items-center gap-2"
                >
                    <span className="text-white">SAÚDE</span>
                    <span className="text-velocity">FIT</span>
                    <span className="ml-1 w-2 h-2 bg-velocity rounded-full animate-pulse" />
                </a>

                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-3 group"
                    aria-label="Abrir menu"
                >
                    <span className="hidden sm:block text-xs font-heading font-bold tracking-widest text-white/70 group-hover:text-velocity transition-colors">
                        MENU
                    </span>
                    <span className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-velocity transition-colors">
                        <Menu size={18} className="text-white" />
                    </span>
                </button>
            </motion.header>

            {/* Power Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        className="fixed inset-0 z-[60] bg-void flex flex-col"
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
                    >
                        <div className="flex items-center justify-between px-6 lg:px-12 py-5">
                            <span className="font-display text-xl tracking-tight">
                                <span className="text-white">SAÚDE</span>
                                <span className="text-velocity">FIT</span>
                            </span>
                            <button
                                onClick={() => setOpen(false)}
                                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-velocity transition-colors"
                                aria-label="Fechar menu"
                            >
                                <X size={18} className="text-white" />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col justify-center px-6 lg:px-12">
                            {NAV_ITEMS.map((item, i) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="group flex items-baseline gap-6 py-3 border-b border-white/5"
                                    initial={{ opacity: 0, x: -40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                                >
                                    <span className="text-xs font-heading text-velocity font-bold">
                                        0{i + 1}
                                    </span>
                                    <span className="font-display text-4xl lg:text-7xl text-white/80 group-hover:text-velocity group-hover:translate-x-4 transition-all duration-300">
                                        {item.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        <div className="px-6 lg:px-12 py-8 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/50">
                            <span>contato@saúdefit.com.br</span>
                            <span>São Paulo · Brasil</span>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}
