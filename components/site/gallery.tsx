import Image from "next/image"
import { Reveal } from "./reveal"

const items = [
  {
    src: "/images/side.jpg",
    alt: "Boanfire fireplace outside the villa with a view of the misty valley at sunrise",
    label: "The Forest Villa",
    span: "lg:col-span-7 lg:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/images/balcony2.jpeg",
    alt: "Outdoor deck terrace with lounge chairs facing a valley",
    label: "Valley Terrace",
    span: "lg:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/stargazing.png",
    alt: "stargazing on a terrace with a view of the misty valley at night",
    label: "The Bathhouse",
    span: "lg:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/suite.JPG",
    alt: "bathtub with a view of the misty valley at sunrise",
    label: "Suite Onsen",
    span: "lg:col-span-4",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/food.JPG",
    alt: "Authentic Himachali cuisine served on a platter",
    label: "The Long Table",
    span: "lg:col-span-4",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/trek.jpg",
    alt: "Guided trek through the forest with a view of the big mountain peaks in the distance",
    label: "Guided Trails",
    span: "lg:col-span-4",
    ratio: "aspect-[3/4]",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary/40 py-24 lg:py-40">
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
              The Property
            </span>
            <h2
              data-reveal-child
              className="mt-5 text-balance font-serif text-5xl font-light leading-[1.02] text-foreground md:text-7xl"
            >
              Seven spaces,
              <br />
              one horizon.
            </h2>
          </div>
          <p
            data-reveal-child
            className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground"
          >
            From the cantilevered Forest Villa to the geothermal bathhouse, every
            corner of SHANGRILA RENAO is composed to dissolve the line between interior and
            wilderness.
          </p>
        </Reveal>

        <Reveal
          stagger
          y={50}
          className="mt-16 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:auto-rows-[minmax(0,1fr)] lg:grid-cols-12"
        >
          {items.map((item) => (
            <figure
              key={item.label}
              data-reveal-child
              className={`group relative isolate min-h-0 overflow-hidden ${item.span}`}
            >
              <div className={`relative w-full ${item.ratio}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 p-5 text-background">
                  <span className="h-px w-6 shrink-0 bg-background/80" />
                  <span className="text-xs uppercase tracking-[0.2em] text-background drop-shadow-md">
                    {item.label}
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
