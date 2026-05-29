import heroImage from "../assets/hero.png"

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-slate-900/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          className="h-full w-full object-cover object-center"
          alt="Retreat exterior"
        />
        <div className="absolute inset-0 bg-[#12263f]/55" />
      </div>

      <div className="relative z-10 min-h-[760px] px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/80 backdrop-blur-sm">
            Eco luxury residence
          </span>
          <h1 className="mt-8 text-5xl font-[300] leading-tight text-white sm:text-6xl md:text-[64px] serif-display">
            Приватный отдых 
в живописных регионах России 
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            Авторский интерьер, тихие виды и гастрономия в приватном формате. Медленный ритм, роскошная простота, естественное спокойствие.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#reserve" className="inline-flex w-full items-center justify-center rounded-md bg-[#a11f2b] px-7 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:opacity-90 sm:w-auto">
              Reserve retreat
            </a>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white/85">
              <span className="font-semibold">Private arrival</span>
              <span className="text-[#d9d1c2]">•</span>
              <span>7 nights stay</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 px-8 pb-6 lg:px-16">
        <div className="mx-auto w-full max-w-[1160px] overflow-hidden rounded-[28px] bg-[#12263f] px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
          <div className="grid gap-6 md:grid-cols-4 md:items-center">
            <div className="space-y-2 text-white/80">
              <p className="text-[11px] uppercase tracking-[0.35em]">Баня</p>
              <p className="text-2xl font-semibold text-white">12 villas</p>
            </div>
            <div className="space-y-2 text-white/80">
              <p className="text-[11px] uppercase tracking-[0.35em]">Досуг</p>
              <p className="text-2xl font-semibold text-white">Spa rituals</p>
            </div>
            <div className="space-y-2 text-white/80">
              <p className="text-[11px] uppercase tracking-[0.35em]">Retreat</p>
              <p className="text-2xl font-semibold text-white">Forest views</p>
            </div>
            <a href="#reserve" className="inline-flex h-14 items-center justify-center rounded-md bg-[#a11f2b] px-6 text-sm font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:opacity-90">
              Book now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
