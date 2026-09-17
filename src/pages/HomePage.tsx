
import { Menu, ShoppingCart } from "lucide-react"

const HomePage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-277.5 items-center justify-between px-6 md:px-10 xl:px-0">
          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex h-10 w-10 items-center justify-start text-white transition-colors hover:text-(--color-primary) md:hidden"
          >
            <Menu size={20} strokeWidth={2.5} />
          </button>

          <img
            src="/images/audiophile%202.svg"
            alt="Audiophile"
            className="h-auto w-35.75"
          />

          <button
            type="button"
            aria-label="View shopping cart"
            className="inline-flex h-10 w-10 items-center justify-end text-white transition-colors hover:text-(--color-primary)"
          >
            <ShoppingCart size={21} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <section className="relative isolate flex min-h-[calc(100vh-80px)] items-start justify-center overflow-hidden bg-black px-6 pb-16 pt-22.75 text-center sm:pt-28 md:min-h-[calc(100vh-96px)] md:items-center md:pb-24 md:pt-0">
        <img
          src="/images/heroImg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-black/20" />

        <div className="relative z-10 flex max-w-97.5 flex-col items-center md:max-w-130">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.7em] text-white/45 sm:mb-6 sm:text-[13px]">
            New product
          </p>
          <h1 className="max-w-85 text-[34px] font-bold uppercase leading-[1.08] tracking-[1.3px] sm:max-w-125 sm:text-[42px] md:text-[48px]">
            XX99 Mark II Headphones
          </h1>
          <p className="mt-6 max-w-82.5 text-[13px] leading-6.25 text-white/70 sm:max-w-90 sm:text-[15px]">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <a
            href="#products"
            className="mt-7 inline-flex min-h-12 items-center justify-center bg-(--color-primary) px-8 text-[12px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-[(--color-primary-hover) sm:mt-8"
          >
            See product
          </a>
        </div>
      </section>
    </main>
  )
}

export default HomePage