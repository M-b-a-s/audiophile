
import Navbar from "../components/Navbar"
import ProductCategories from "@/components/ProductCategories"

const HomePage = () => {
  return (
    <main className="min-h-screen text-white">
      <Navbar />

      <section className="relative isolate flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-black px-6  text-center">
        <img
          src="/images/heroImg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-black/20" />

        <div className="relative z-10 flex max-w-97.5 flex-col items-center md:max-w-130">
          <p className="mb-5 text-[14px] uppercase tracking-[0.714rem] text-white/45 sm:mb-6 sm:text-[13px]">
            New product
          </p>
          <h1 className="max-w-82 text-[36px] font-bold uppercase leading-[1.08] tracking-[1.3px] sm:max-w-125 sm:text-[42px] md:text-[48px]">
            XX99 Mark II Headphones
          </h1>
          <p className="mt-6 max-w-82.5 text-[15px] leading-6.25 text-white/70">
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
      <ProductCategories />
    </main>
  )
}

export default HomePage