import Image from "next/image"
import { Reveal } from "./reveal"

const stats = [
  { value: "2", label: "Private suites" },
  { value: "2023", label: "Established" },
  { value: "2,250m", label: "Above sea level" },
  { value: "2026", label: "MOST ROMANTIC ESCAPE - MakeMyTrip" },
]

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/owners.jpg"
              alt="Artisan hands arranging dried botanicals on a raw stone surface at a luxury mountain lodge"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal stagger y={30}>
          <span
            data-reveal-child
            className="text-[0.7rem] uppercase tracking-[0.4em] text-accent"
          >
            Our Story
          </span>
          <h2
            data-reveal-child
            className="mt-5 text-balance font-serif text-4xl font-light leading-[1.1] text-foreground md:text-6xl"
          >
            A Dream Cabin, Built by Our Hands.
          </h2>
          <div
            data-reveal-child
            className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground"
          >
            <p>
              A few years ago we, Om and Shoobhi, found ourselves in a remote corner of Himachal Pradesh and fell quietly in love with Jibhi. Despite living in the city, something kept drawing us back to this little mountain village, until a simple idea began to take shape: what if we built our own cabin here?
            </p>
            <p>
              What followed was anything but easy. We were doing it alongside our full-time jobs, in a village where even finding a jar of peanut butter meant a two-hour journey to Kullu. Getting a 100-kilogram glass panel to the property was an adventure in itself. But we didn’t just build the cabin — we learned how to. We learned to work with wood, paint, cut tiles and install them, build a bathroom ceiling, make a headboard, and wire the cabin ourselves. Piece by piece, skill by skill, the dream began to take form.
            </p>
            <p>With the help of our local hosts and friends, a year later, Shangrila Renao stood where our dream had once been. What began as a cabin we wanted to build became something much more: a place we had poured our time, hands and hearts into — and a place we now get to share with others.</p>
          </div>

          <dl
            data-reveal-child
            className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-4xl font-light text-foreground">
                  {s.value}
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
