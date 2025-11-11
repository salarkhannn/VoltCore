import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 });

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

        const startValue = isMobile ? 'bottom bottom' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
                markers: true
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }

        tl.fromTo(".about",
            {
                clipPath: "inset(50% 50% 50% 50%)",
            },
            {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: {
                    trigger: ".about-wrapper",
                    start: "center center",
                    end: "center 10%",
                    scrub: 1,
                    // markers: true,
                }
            }
        )
    }, [])

    return (
    <div>
        <div className='hero-container'>
            <section
                id="hero"
                className="
                    relative
                    overflow-hidden
                    before:absolute
                    before:inset-0
                    before:bg-gradient-to-b
                    before:from-black
                    before:to-transparent
                    before:pointer-events-none
                "
            >
                <div className='flex flex-col items-center mt-40 md:mt-40 z-10 relative'>
                    <p className='subtitle text-center text-sm md:text-2xl tracking-tighter italic'>
                        Intelligence begins at the core.
                    </p>
                    <h1 className="title tracking-tight font-medium leading-[0.6]">
                        <span>The Future of Compute,</span><br/>
                        <span>Engineered in Silicon</span>
                    </h1>
                    <p className='subtitle text-center text-sm md:text-md lg:text-lg tracking-tight max-w-xl md:max-w-4xl pt-6 leading-relaxed'>
                        Engineered to accelerate intelligence at every layer of computing — from silicon-level architecture to real-time inference — enabling machines to think faster, adapt smarter, and operate with unprecedented efficiency.
                    </p>
                </div>
            </section>
            <div className='video absolute inset-0 w-full pt-0 top-0 md:pt-80 mb-20 sm:mb-0'>
                <video
                    ref={videoRef}
                    src='/video/output3.mp4'
                    muted
                    playsInline
                    preload='auto'
                />
            </div>
        </div>
        <div className='h-screen sticky top-0 bg-amber-900 about flex items-center justify-center about'>
            <h1 className='text-black text-7xl'>HAPPY BIRTHDAY DOODA</h1>
        </div>
    </div>
    )
}

export default Hero
