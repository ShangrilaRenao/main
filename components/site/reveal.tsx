"use client"

import { useRef, type ReactNode, type ElementType } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** vertical offset to travel from, in px */
  y?: number
  /** stagger delay for child elements with [data-reveal-child] */
  stagger?: boolean
  delay?: number
}

export function Reveal({
  children,
  as: Tag = "div",
  className,
  y = 40,
  stagger = false,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const targets = stagger
        ? el.querySelectorAll<HTMLElement>("[data-reveal-child]")
        : [el]

      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.12 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )
    },
    { scope: ref },
  )

  return (
    // @ts-expect-error polymorphic ref
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
