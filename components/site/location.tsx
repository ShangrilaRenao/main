import { Reveal } from "./reveal"

const details = [
  { label: "Nearest airport", value: "Bhuntar, Kullu Manali (KUU) — 2h 40m transfer" },
  { label: "Coordinates", value: "31.638° N, 77.359° E" },
  { label: "Address", value: "Shangrila Renao, Tandi, Jibhi, Himachal Pradesh" },
]

export function Location() {
  return (
    <section id="location" className="bg-secondary/40 py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal
          stagger
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span
              data-reveal-child
              className="text-[0.7rem] uppercase tracking-[0.4em] text-accent"
            >
              Find Us
            </span>
            <h2
              data-reveal-child
              className="mt-5 text-balance font-serif text-5xl font-light leading-[1.02] text-foreground md:text-7xl"
            >
              At the end
              <br />
              of the valley.
            </h2>
          </div>
          <p
            data-reveal-child
            className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground"
          >
            SHANGRILA RENAO sits where the last paved road gives way to forest. Private
            transfers can be arranged from Chandigarh, Kulu, or Manali
            request.
          </p>
        </Reveal>

        <Reveal y={40} className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="overflow-hidden border border-border lg:col-span-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.626788501012!2d77.34506429999999!3d31.589280799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905afcf872bb595%3A0xbe1eb06407d4656a!2sShangrila%20Renao!5e0!3m2!1sen!2sin!4v1787908439359!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full grayscale-[0.4] lg:h-full lg:min-h-[28rem]"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-between gap-10 border border-border bg-card p-8 lg:col-span-4 lg:p-10">
            <div className="space-y-8">
              {details.map((d) => (
                <div key={d.label}>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {d.label}
                  </p>
                  <p className="mt-2 text-pretty font-serif text-xl font-light text-foreground">
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="https://www.google.com/maps?q=Shangri-La+Renao"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground"
            >
              Open in Google Maps
              <span className="inline-block h-px w-8 bg-foreground transition-all duration-300 group-hover:w-12" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
