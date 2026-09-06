import Image from "next/image"
import { ArrowUpRight, Camera, PenLine } from "lucide-react"

const USERNAME = "SHANGRILARENAO"

const socials = [
  {
    title: "Blogs",
    links: [
      {
        label: "Medium",
        href: `https://medium.com/@${USERNAME}`,
        icon: PenLine,
      },
    ],
  },
  {
    title: "On social",
    links: [
      {
        label: "Instagram",
        href: `https://instagram.com/${USERNAME}`,
        icon: Camera,
      },
    ],
  },
]

const bookings = [
  {
    name: "Airbnb",
    href: "https://www.airbnb.com/h/temploamor-shangrilarenao",
    mark: (
      <span className="relative block h-8 w-20">
        <Image
          src="/images/airbnb.png"
          alt="Airbnb"
          fill
          sizes="80px"
          className="object-contain"
        />
      </span>
    ),
  },
  {
    name: "MakeMyTrip",
    href: "https://app.mmyt.co/Xm2V/ddwwh772",
    mark: (
      <span className="relative block h-8 w-[110px]">
        <Image
          src="/images/mmt.png"
          alt="MakeMyTrip"
          fill
          sizes="110px"
          className="object-contain"
        />
      </span>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col items-center text-center lg:col-span-5 lg:flex-row lg:items-start lg:gap-4 lg:text-left">
            <Image
              src="/images/logo1.png"
              alt="Shangrila Renao logo"
              width={64}
              height={64}
              className="h-24 w-24 shrink-0 object-contain"
            />

            <div>
              <p className="font-serif text-2xl tracking-[0.2em] sm:text-3xl">
                SHANGRILA RENAO
              </p>

              <p className="mx-auto mt-6 max-w-xs text-pretty text-sm leading-relaxed text-primary-foreground/70 lg:mx-0">
                From the enchanting Dollhouse to the dreamy Templo Amor, each cabin is an
                intimate retreat where the comforts of indoors meet the stillness and
                beauty of the Himalayas.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/55">
              Available on
            </p>

            <div className="mt-5 flex items-center justify-center gap-4 lg:justify-start">
              {bookings.map((booking) => (
                <a
                  key={booking.name}
                  href={booking.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center transition-transform hover:-translate-y-0.5"
                >
                  {booking.mark}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-4 lg:grid-cols-2">
            {socials.map((group) => (
              <div key={group.title}>
                <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/55">
                  {group.title}
                </p>

                <ul className="mt-5 space-y-3">
                  {group.links.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-foreground/85 transition-opacity hover:opacity-60"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-primary-foreground/15 pt-8 text-xs uppercase tracking-[0.15em] text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 SHANGRILA RENAO Your Dream Cabin in the Himalayas</p>
        </div>
      </div>
    </footer>
  )
}