"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const particleOptions: ISourceOptions = {
    fullScreen: {
        enable: false,
    },

    background: {
        color: {
            value: "transparent",
        },
    },

    fpsLimit: 60,
    detectRetina: true,

    particles: {
        number: {
            value: 80,

            density: {
                enable: true,
                width: 1920,
                height: 1080,
            },
        },

        color: {
            value: "#ff0000",
        },

        shape: {
            type: "circle",
        },

        size: {
            value: 8,
        },

        opacity: {
            value: 1,
        },

        links: {
            enable: true,
            distance: 220,
            color: "#ff0000",
            opacity: 1,
            width: 3,
        },

        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,

            outModes: {
                default: "bounce",
            },
        },
    },

    interactivity: {
        detectsOn: "canvas",

        events: {
            resize: {
                enable: true,
            },

            onHover: {
                enable: false,
            },

            onClick: {
                enable: false,
            },
        },
    },
};

export function ParticleBackground() {
    return (
        <ParticlesProvider init={loadSlim}>
            <Particles
                id="TEST-PARTICLES"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                options={particleOptions}
            />
        </ParticlesProvider>
    );
}