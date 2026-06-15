import HeroPage from "./components/HeroPage"
import backgroundImage from "./assets/background.png"
import icon from "./assets/icon.svg"

export default function App() {
  return (
    <main
      className="min-h-screen text-[#12263f]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundColor: "#FEFAE0",
      }}
    >
      <div className="mx-auto max-w-[1040px] px-6 pb-24">
        <header className="sticky top-0 z-40 rounded-b-[30px] bg-[#1C3144] px-8 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-1">
              <img src={icon} alt="Orchard House logo" className="h-11 w-11 object-contain" />
              <div>
                <p className="font-semibold text-[#70161E] text-[20px] leading-5">ОТДЫХ <br />РОССИИ</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-[14px] tracking-[0.1em] text-[#FEFAE0]/90 md:flex">
              <a href="#experience" className="transition hover:text-[#FEFAE0]">Жилой фонд</a>
              <a href="#benefits" className="transition hover:text-[#FEFAE0]">Баня</a>
              <a href="#culinary" className="transition hover:text-[#FEFAE0]">Досуг</a>
              <a href="#reserve" className="transition hover:text-[#FEFAE0]">Сервис</a>
              <a href="#reserve" className="transition hover:text-[#FEFAE0]">Отзывы</a>
              <a href="#reserve" className="transition hover:text-[#FEFAE0]">Контакты</a>
            </nav>
            
            
            <a href="#reserve" className="inline-flex items-center justify-center rounded-md bg-[#70161E] px-12 py-3 text-[14px] font-regular tracking-[0.1em] uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
              Забронировать
            </a>
          </div>
        </header>

        <div className="mt-10 rounded-[30px] border-[3px] border-[#1C3144]">
          <div className="overflow-hidden rounded-[26px]">
            <HeroPage />
          </div>

          <footer className="mt-16 rounded-[0_0_22px_22px] bg-[#12263f] px-8 py-8 text-[#FEFAE0] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          
            
          <div className="flex flex-wrap items-center gap-5 text-sm text-[#d9d1c2] md:justify-between">
            <div className="flex items-center gap-1">
              <img src={icon} alt="Orchard House logo" className="h-8 w-8 object-contain" />
              <div>
                <p className="font-semibold text-[#70161E] text-[16px] leading-4">ОТДЫХ <br />РОССИИ</p>
              </div>
            </div>
            <div className="mx-auto md:absolute md:left-1/2 transform md:-translate-x-1/2">
              <div className="flex flex-col gap-3 text-[#d9d1c2] hover:text-[#FEFAE0] md:flex-row md:items-center text-[14px] ">
                <a href="" >Отзывы</a>
                <a href="" >О нас</a>
                <a href="" >Сотрудничество</a>
                <a href="" >Жилой фонд</a>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center ">
              <span>Yt</span>
              <span>Tg</span>              
              <span>Vk</span>
              <span>Ph</span>
            </div>
          </div>
        </footer>
          
        </div>
        
        <div className="space-y-2 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center py-6">
          <p className="text-sm text-[#1C3144] text-center">© 2026 Отдых России. Все права защищены.</p>
        </div>
      </div>
    </main>
  )
}
