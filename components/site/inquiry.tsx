"use client"

import { useState, type FormEvent } from "react"
import { Reveal } from "./reveal"

const fields = [
  { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { name: "checkin", label: "Check-in", type: "date", placeholder: "" },
  { name: "checkout", label: "Check-out", type: "date", placeholder: "" },
  { name: "guests", label: "Guests", type: "number", placeholder: "2" },
]

export function Inquiry() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)
  const name = formData.get("name") ?? ""
  const email = formData.get("email") ?? ""
  const checkin = formData.get("checkin") ?? ""
  const checkout = formData.get("checkout") ?? ""
  const guests = formData.get("guests") ?? ""
  const message = formData.get("message") ?? ""

  const subject = encodeURIComponent(`Reservation enquiry from ${name}`)
  const body = encodeURIComponent(
    `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Check-in: ${checkin}\n` +
      `Check-out: ${checkout}\n` +
      `Guests: ${guests}\n\n` +
      `Stay details:\n${message}`
  )

  window.location.href = `mailto:shangrilarenao@gmail.com?subject=${subject}&body=${body}`
  setSent(true)
}

  return (
    <section id="inquire" className="bg-background py-24 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <Reveal stagger className="lg:col-span-5">
          <span
            data-reveal-child
            className="text-[0.7rem] uppercase tracking-[0.4em] text-accent"
          >
            Reservations
          </span>
          <h2
            data-reveal-child
            className="mt-5 text-balance font-serif text-5xl font-light leading-[1.02] text-foreground md:text-7xl"
          >
            Begin your enquiry.
          </h2>
          <p
            data-reveal-child
            className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground"
          >
            Our reservations team responds personally within 24 hours. Share a
            few details and we will craft a stay around the season, the mountain,
            and you.
          </p>
          <div
            data-reveal-child
            className="mt-10 space-y-2 text-sm text-muted-foreground"
          >
            <p>
              <span className="text-foreground">Call</span> · +91 9775213057
            </p>
            <p>
              <span className="text-foreground">Write</span> ·
              shangrilarenao@gmail.com
            </p>
          </div>
        </Reveal>

        <Reveal y={30} className="lg:col-span-7">
          {sent ? (
            <div className="flex h-full min-h-72 flex-col items-start justify-center border border-border bg-card p-10">
              <span className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">
                Thank you
              </span>
              <p className="mt-5 text-balance font-serif text-3xl font-light leading-snug text-foreground md:text-4xl">
                Your enquiry has reached the valley. We will be in touch very
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.name} className="flex flex-col">
                  <label
                    htmlFor={f.name}
                    className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required
                    min={f.type === "number" ? 1 : undefined}
                    placeholder={f.placeholder}
                    className="border-b border-border bg-transparent pb-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  />
                </div>
              ))}

              <div className="flex flex-col sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Tell us about your stay
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Occasion, preferences, anything we should know…"
                  className="resize-none border-b border-border bg-transparent pb-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-opacity hover:opacity-90 sm:col-span-2"
              >
                Send enquiry
                <span className="inline-block h-px w-8 bg-primary-foreground transition-all duration-300 group-hover:w-12" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
