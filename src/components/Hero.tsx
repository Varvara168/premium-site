export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">

      {/* ФОН */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
          className="h-full w-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ТЕКСТ */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        <p className="tracking-[0.3em] text-white/60 uppercase">
          Premium Retreat
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
          A place where <br />
          time slows down
        </h1>

        <p className="mt-6 max-w-xl text-white/70">
          Luxury nature experience with private villas, spa zones and exclusive comfort.
        </p>

        <button className="mt-10 px-8 py-3 bg-white text-black hover:scale-105 transition">
          Explore
        </button>
      </div>

      {/* НИЗ (декор) */}
      <div className="absolute bottom-10 left-10 text-white/40 text-sm">
        Scroll to explore ↓
      </div>

    </section>
  )
}