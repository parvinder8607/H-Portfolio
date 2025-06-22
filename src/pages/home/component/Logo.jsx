import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react'

const Logo = () => {

    const textRef = useRef();
  const container = useRef();

  useGSAP(() => {
    const ctx = gsap.matchMedia();

    ctx.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions;

        const split = new SplitText(textRef.current, { type: 'words, chars' });

        const tl = gsap.timeline();

        tl.from(split.chars, {
          y: '100%',
          duration: 1,
          ease: 'power1.out',
          stagger: 0.05,
        });

        tl.to(
          container.current,
          {
            transform: 'translate(0,0)',
            top: 15,
            left: 15,
            
            duration: 1,
            ease: 'power1.out',
          },
          '+=0.2'
        );

        tl.to(
          textRef.current,
          {
            fontSize: isMobile ? '24px' : '32px',
            duration: 1,
            ease: 'power1.out',
          },
          '<'
        );
      }
    );

    return () => ctx.revert();
  }, []);

  return (
    <>
    <div
        ref={container}
        className="absolute overflow-hidden  max-sm:w-full   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h1
          ref={textRef}
          style={{ fontFamily: 'Gugi' }}
          className=" text-[42px] lg:text-[100px] leading-tight"
        >
          Himanshi Bisht
        </h1>
        
        </div>
            </>
  )
}

export default Logo