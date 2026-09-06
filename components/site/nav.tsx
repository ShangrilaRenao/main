"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const links = [
  { label: "The Retreat", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Journal", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#location" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#top"
          className={cn(
            "inline-flex items-center gap-3 transition-colors",
            scrolled ? "text-foreground" : "text-background",
          )}
        >
          <img
            src="images/logo1.png"
            alt="Shangrila Renao logo"
            className="h-20 w-20 object-contain"
          />

          <span className="inline-flex flex-col items-start">
            <span
              className={cn(
                "mt-1 text-[0.55rem] uppercase tracking-[0.24em]",
                scrolled ? "text-foreground/75" : "text-background/80",
              )}
            >
              YOUR DREAM CABIN IN THE HIMALAYAS
            </span>

            <span className="font-serif text-xl tracking-[0.2em]">
              SHANGRILA RENAO
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-xs uppercase tracking-[0.18em] transition-colors hover:opacity-60",
                scrolled ? "text-foreground" : "text-background",
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#inquire"
            className={cn(
              "hidden border px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors md:inline-block",
              scrolled
                ? "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
                : "border-background/40 text-background hover:bg-background hover:text-foreground",
            )}
          >
            Inquire
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-6 w-7 flex-col justify-between md:hidden",
              scrolled || open ? "text-foreground" : "text-background",
            )}
          >
            <span
              className={cn(
                "h-px w-full bg-current transition-transform",
                open && "translate-y-[11px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-current transition-transform",
                open && "-translate-y-[11px] -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-[max-height] duration-500 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm uppercase tracking-[0.18em] text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inquire"
            onClick={() => setOpen(false)}
            className="mt-2 border border-foreground/30 px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-foreground"
          >
            Inquire
          </a>
        </div>
      </div>
    </header>
  )
}
