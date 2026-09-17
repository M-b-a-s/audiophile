import { Menu, ShoppingCart } from "lucide-react"

const Navbar = () => {
  return (
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

  )
}

export default Navbar