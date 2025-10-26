import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 0.5,
            ease: 'expo.out',
            stagger: 0.01
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 0.6,
            ease: 'expo.out',
            stagger: 0.03,
            delay: 0.2,
        })
    })

    return (
    <>
        <section id="hero" className='noisy'>
            <div className='flex flex-col items-center mt-40 md:mt-32'>
                <p className='subtitle text-center text-2xl tracking-tighter italic'>Intelligence begins at the core.</p>
                <h1 className="title tracking-tight font-medium leading-[0.6]">
                    <span >The Future of Compute,</span><br/>
                    <span >Engineered in Silicon</span>
                </h1>
                <p className='subtitle text-center text-sm md:text-md lg:text-lg tracking-tight max-w-xl md:max-w-4xl pt-6 leading-relaxed'>Engineered to accelerate intelligence at every layer of computing — from silicon-level architecture to real-time inference — enabling machines to think faster, adapt smarter, and operate with unprecedented efficiency.</p>
            </div>

            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 hidden md:block'>
                        
                    </div>
                </div>
            </div>
        </section>'
    </>
    )
}

export default Hero
