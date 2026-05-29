import heroImage from "../assets/hero.png"

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[20px] bg-slate-900/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          className="h-full w-full object-cover object-center"
          alt="Retreat exterior"
        />
        <div className="absolute inset-0 bg-[#12263f]/10" />
      </div>

      <div className="relative z-10 min-h-[800px] px-8 py-20 pt-32 sm:px-12 sm:py-24 sm:pt-40 lg:px-16 lg:py-28 lg:pt-48">
        <div className="max-w-3xl">
          
          <h1 className="mt-8 text-bold leading-tight text-[#FEFAE0] md:text-[48px] serif-display">
            Приватный отдых <br />
            в живописных регионах России 
          </h1>
          <p className="mt-6 font-thin md:text-[20px]  text-[#FEFAE0]/75 ">
            Пространство для восстановления себя. <br />
            Новый опыт созданный для вас
          </p>
        </div>
      </div>

    </section>
  )
}
