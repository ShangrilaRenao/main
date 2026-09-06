import { Reveal } from "./reveal"

const reviews = [
    {
    quote:
      "One of the best properties in Jibhi. The services are close to those of a five-star property, which is incredible in such a beautiful location. Everything is perfect, from the views and service to the amenities. This place feels magical.",
    name: "AMIT",
    detail: "Jibhi · Forest Villa",
  },
  {
    quote:
      "We had a very relaxing and pleasant stay at Shangrila Renao. It's the perfect place for an escape from the hustle and bustle of the city because this property is away from all the chaos and offers some of the best mountain views. The staff is very friendly, courteous, and helpful during our stay. They prepared sumptuous food for us at a very reasonable price. Glad we decided to stay here with hopes of coming back soon.",
    name: "vinay n",
    detail: "Excellent Stay",
  },
{
  quote: `It's not often you get more than what you see in the pictures and description of the property, so if I could, I would have given 7 stars to this place without blinking.
Folks in previous comments have said everything you need to know. I'd add that being here truly feels like finding yourself in a fairytale, with breathtaking views, fantastic service, and incredible local food.
The hosts are kind, responsive, and helpful, and I'd highly recommend staying here for anyone thinking of a break in paradise.
Thank you, Om and staff, for your lovely hospitality.`,
  name: "Dror",
  detail: "Shangrila Rénao - Love Temple",
},
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-primary py-24 text-primary-foreground lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="text-[0.7rem] uppercase tracking-[0.4em] text-primary-foreground/60">
            In Their Words
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance font-serif text-3xl font-light italic leading-[1.3] md:text-5xl">
            &ldquo;A place that asks nothing of you but to be present.&rdquo;
          </h2>
        </Reveal>

        <Reveal
          stagger
          y={40}
          className="mt-20 grid gap-px overflow-hidden border border-primary-foreground/15 md:grid-cols-3"
        >
          {reviews.map((r) => (
            <figure
              key={r.name}
              data-reveal-child
              className="flex flex-col justify-between gap-10 bg-primary p-8 lg:p-10"
            >
              <blockquote className="text-pretty font-serif text-xl font-light leading-relaxed">
                {r.quote}
              </blockquote>
              <figcaption>
                <div className="mb-4 flex gap-1" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <p className="text-sm tracking-wide">{r.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/55">
                  {r.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <Reveal className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
            Rated 5 / 5 across 331 Google Reviews · INDIA'S MOST ROMANTIC ESCAPE 2026 MMT
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Star() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="text-accent"
    >
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  )
}
