'use client';

import React, { useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';

export const HambergerIcon = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="w-[8%] flex justify-center items-center">
            <MotionConfig
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                }}
            >
                <motion.button
                    initial={false}
                    animate={active ? 'open' : 'closed'}
                    onClick={() => setActive((pv) => !pv)}
                    className="relative h-8 w-8 rounded-full bg-white/0 transition-colors hover:bg-white/20"
                    aria-label="Toggle menu"
                >
                    {/* Top line */}
                    <motion.span
                        variants={VARIANTS.top}
                        className="absolute h-1 w-7 bg-white"
                        style={{ top: '25%', left: '50%', x: '-50%', y: '-50%' }}
                    />
                    {/* Middle line */}
                    <motion.span
                        variants={VARIANTS.middle}
                        className="absolute h-1 w-7 bg-white"
                        style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                    />
                    {/* Bottom line */}
                    <motion.span
                        variants={VARIANTS.bottom}
                        className="absolute h-1 w-7 bg-white"
                        style={{ bottom: '25%', left: '50%', x: '-50%', y: '50%' }}
                    />
                </motion.button>
            </MotionConfig>
        </div>
    );
};

const VARIANTS = {
    top: {
        open: {
            rotate: ['0deg', '0deg', '45deg'],
            top: ['25%', '50%', '50%'],
        },
        closed: {
            rotate: ['45deg', '0deg', '0deg'],
            top: ['50%', '50%', '25%'],
        },
    },
    middle: {
        open: {
            rotate: ['0deg', '0deg', '-45deg'],
            opacity: 1,
        },
        closed: {
            rotate: ['-45deg', '0deg', '0deg'],
            opacity: 1,
        },
    },
    bottom: {
        open: {
            rotate: ['0deg', '0deg', '45deg'],
            bottom: ['25%', '50%', '50%'],
            left: '50%',
        },
        closed: {
            rotate: ['45deg', '0deg', '0deg'],
            bottom: ['50%', '50%', '25%'],
            left: '50%',
        },
    },
};
