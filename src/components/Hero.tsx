import heroImage from "../assets/hero.png"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">

      {/* ФОН */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          className="h-full w-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ТЕКСТ */}
      <div className="relative z-10 flex h-full flex-col items-left justify-center text-left px-6">


        <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
          Приватный отдых <br />
          в живописных регионах России 
        </h1>
        


        <p className="mt-6 max-w-xl text-white/70">
          Пространство для восстановления себя. <br />
          Новый опыт созданный для вас
        </p>

        {/* <button className="mt-10 px-8 py-3 bg-white text-black hover:scale-105 transition">
          Explore
        </button> */}
      </div>

      {/* НИЗ (декор) */}
      <div className="absolute bottom-10 left-10 text-white/40 text-sm">
        Scroll to explore ↓
      </div>

    </section>
  )
}