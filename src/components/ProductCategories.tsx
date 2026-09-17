import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Headphones",
    image: "/images/headphones-sm.png",
  },
  {
    name: "Speakers",
    image: "/images/speaker-sm.png",
  },
  {
    name: "Earphones",
    image: "/images/earphones-sm.png",
  },
];

export default function ProductCategories() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-15 md:grid-cols-3">
        {categories.map((category) => (
          <a
            key={category.name}
            href="#"
            className="group relative flex h-45 flex-col items-center justify-end rounded-lg bg-neutral-100 pb-7 transition-colors hover:bg-neutral-200 mb-10"
          >
            {/* Product image */}
            <div className="absolute -top-15 h-32 w-32">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-contain drop-shadow-[0_18px_8px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>

            {/* Category name */}
            <h2 className="text-[15px] font-bold uppercase tracking-widest text-neutral-900">
              {category.name}
            </h2>

            {/* Shop link */}
            <span className="mt-2 flex items-center gap-2 text-[13px] font-medium uppercase tracking-wider text-neutral-500 transition-colors group-hover:text-orange-500">
              Shop
              <ChevronRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1 text-(--color-primary)"
              />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}