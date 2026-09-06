"use client"

import { useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="h-6 w-4 shrink-0 text-[#f4d071]"
      aria-hidden="true"
    >
      <path d="M8 4h8v3a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5a3 3 0 0 0 3 3" />
      <path d="M16 6h3a3 3 0 0 1-3 3" />
      <path d="M10 11h4v5h-4z" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  )
}

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // intro reveal
      // gsap.from("[data-hero-line]", {
      //   yPercent: 110,
      //   opacity: 0,
      //   duration: 1.4,
      //   ease: "power4.out",
      //   stagger: 0.15,
      //   delay: 0.2,
      // })
      // gsap.from("[data-hero-meta]", {
      //   opacity: 0,
      //   y: 20,
      //   duration: 1.2,
      //   ease: "power3.out",
      //   delay: 1,
      //   stagger: 0.1,
      // })

      // parallax on scroll
      gsap.to(imageRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="top" className="relative h-[100svh] w-full overflow-hidden">
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
      <picture>
  <source media="(max-width: 767px)" srcSet="/images/mobile1.jpg" />
  <img
    src="/images/hero.jpg"
    alt="Shangri-La Renao in the Jibhi valley, Himachal Pradesh, India"
    className="absolute inset-0 h-full w-full object-cover"
  />
</picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/55" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-12 pt-32 lg:px-10">
        <div
          data-hero-meta
          className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-2 text-center"
        >
          <span className="text-[0.8rem] font-bold uppercase tracking-[0.4em] text-background/80">
            Jibhi · Himachal Pradesh · India
          </span>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
     <TrophyIcon />
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-background/90">
              INDIA'S MOST ROMANTIC ESCAPE 2026
            </span>
             <TrophyIcon />

            <span className="flex items-center justify-center overflow-hidden">
              <img
                src="/images/mmt.png"
                alt="MakeMyTrip"
                className="h-18 w-38 object-contain"
              />
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl">
     <h1 className="font-serif font-bold leading-[0.92] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] sm:font-light">
  <span className="block overflow-hidden">
    <span
      data-hero-line
      className="block text-[10vw] italic sm:text-[12vw] md:text-[12vw] lg:text-[5rem]"
    >
      PEARCHED ABOVE
    </span>
  </span>

  <span className="block overflow-hidden">
    <span
      data-hero-line
      className="block text-[10vw] sm:text-[12vw] md:text-[12vw] lg:text-[5rem]"
    >
      THE VALLEY.
    </span>
  </span>
</h1>

          <div
            data-hero-meta
            className="mt-8 flex flex-col gap-6 border-t border-background/25 pt-6 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-pretty text-sm leading-relaxed text-background/80">
              From the enchanting Dollhouse to the dreamy Templo Amor, each cabin is an intimate retreat where the comforts of indoors meet the stillness and beauty of the Himalayas.
            </p>
            <a
              href="#story"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-background"
            >
              Begin the descent
              <span className="inline-block h-px w-10 bg-background transition-all duration-300 group-hover:w-16" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
