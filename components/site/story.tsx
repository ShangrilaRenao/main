import Image from "next/image"
import { Reveal } from "./reveal"

const chapters = [
  {
    index: "01",
    title: "Arrival",
    image: "/images/arrival_1.jpg",
    alt: "Minimalist luxury mountain suite with floor-to-ceiling windows framing a misty forest",
    body: "Winding Himalayan roads lead to the little village of Jibhi, where the pace slows and warm local hospitality awaits. Both cabins face the eastern mountains, where sunrise finds you from bed to bath — no two mornings quite alike.",
    align: "left" as const,
  },
  {
    index: "02",
    title: "Immersion",
    image: "/images/arrival_2.jpg",
    alt: "Steaming outdoor stone hot spring soaking pool at a luxury mountain spa at dusk",
    body: "Hot water, warm steam, and mountains stretching beyond the glass. Soak in the tub, retreat into the sauna, and let the day dissolve slowly into lantern light and silence — the body settling into the unhurried rhythm of the mountains.",
    align: "right" as const,
  },
]

export function Story() {
  return (
    <section id="story" className="bg-background py-24 lg:py-40">
      {/* opening statement */}
      <Reveal
        as="div"
        stagger
        className="mx-auto max-w-5xl px-6 text-center lg:px-10"
      >
        <span
          data-reveal-child
          className="text-[0.7rem] uppercase tracking-[0.4em] text-accent"
        >
          The Philosophy
        </span>
        <p
          data-reveal-child
          className="mt-8 text-balance font-serif text-3xl font-light leading-[1.25] text-foreground md:text-5xl lg:text-6xl"
        >
          Sometimes, you have to leave the world behind to hear what has been within you all along.
        </p>
        <p
          data-reveal-child
          className="mx-auto mt-8 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground"
        >
         Shangrila was born from a simple belief: that in the quiet, we remember how to listen — to the river, to the birds, to the mountains, and eventually, to ourselves. Here, the pace softens, the noise falls away, and there is room to hear the voice that gets lost in the rush of everyday life.
        </p>
      </Reveal>

      {/* chapters */}
      <div className="mt-28 flex flex-col gap-28 lg:gap-44">
        {chapters.map((c) => (
          <div
            key={c.index}
            className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10"
          >
            <Reveal
              className={
                c.align === "right"
                  ? "lg:order-2 lg:col-span-7"
                  : "lg:col-span-7"
              }
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[16/11]">
                <Image
                  src={c.image || "/placeholder.svg"}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal
              stagger
              y={30}
              className={
                c.align === "right"
                  ? "lg:order-1 lg:col-span-5"
                  : "lg:col-span-5"
              }
            >
              <span
                data-reveal-child
                className="font-serif text-5xl font-light text-accent"
              >
                {c.index}
              </span>
              <h3
                data-reveal-child
                className="mt-4 font-serif text-4xl font-light text-foreground md:text-5xl"
              >
                {c.title}
              </h3>
              <p
                data-reveal-child
                className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground"
              >
                {c.body}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
