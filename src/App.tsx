import { useState, useEffect } from "react"
import HeroPage from "./components/HeroPage"
import backgroundImage from "./assets/background.png"
import icon from "./assets/icon.svg"
import yt from "./assets/yt.png"
import tg from "./assets/tg.png"
import vk from "./assets/vk.png"
import ph from "./assets/ph.png"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])

  return (
    <main
      className="min-h-screen text-[#1C3144]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundColor: "#FEFAE0",
      }}
    >
      <div className="mx-auto max-w-[1040px] px-0 sm:px-6 pb-0 md:pb-24">
        <header className="sticky top-0 z-40 rounded-b-[15px] sm:rounded-b-[30px] bg-[#1C3144] px-8 sm:px-8 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between">
            <a href="#about-us" className="flex items-center gap-3">
              <img src={icon} alt="Orchard House logo" className="h-11 w-11 object-contain" />
              <div className="hidden md:block">
                <p className="font-semibold text-[#70161E] text-[20px] leading-5">ОТДЫХ <br />РОССИИ</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-[14px] tracking-[0.1em] text-[#FEFAE0]/90 md:flex">
              <a href="#best-offer" className="transition hover:text-[#FEFAE0]">Жилой фонд</a>
              <a href="#benefits" className="transition hover:text-[#FEFAE0]">Баня</a>
              <a href="#leisure" className="transition hover:text-[#FEFAE0]">Досуг</a>
              <a href="#infrastructure" className="transition hover:text-[#FEFAE0]">Сервис</a>
              <a href="#reserve" className="transition hover:text-[#FEFAE0]">Отзывы</a>
              <a href="#contacts" className="transition hover:text-[#FEFAE0]">Контакты</a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[5px] ${menuOpen ? 'bg-transparent' : 'bg-[#70161E]'}`}
                onClick={() => setMenuOpen((s) => !s)}
                aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={menuOpen}
              >
                {!menuOpen ? (
                  <span className="flex flex-col justify-center gap-1">
                    <span className="block h-[2px] w-5 bg-[#1C3144] rounded-sm" />
                    <span className="block h-[2px] w-5 bg-[#1C3144] rounded-sm" />
                    <span className="block h-[2px] w-5 bg-[#1C3144] rounded-sm" />
                  </span>
                ) : (
                  <span className="relative block w-5 h-5">
                    <span className="absolute inset-0 m-auto block h-[2px] w-5 bg-[#FEFAE0] rotate-45" />
                    <span className="absolute inset-0 m-auto block h-[2px] w-5 bg-[#FEFAE0] -rotate-45" />
                  </span>
                )}
              </button>

              <a href="#reserve" className="hidden md:inline-flex items-center justify-center rounded-md bg-[#70161E] px-12 py-3 text-[14px] font-regular tracking-[0.1em] uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
                Забронировать
              </a>
            </div>
          </div>
        </header>

        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-[#1C3144] text-[#FEFAE0] flex flex-col items-center justify-center gap-6 p-6">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Закрыть меню"
              className="absolute top-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-[5px] bg-transparent"
            >
              <span className="relative block w-5 h-5">
                <span className="absolute inset-0 m-auto block h-[2px] w-5 bg-[#FEFAE0] rotate-45" />
                <span className="absolute inset-0 m-auto block h-[2px] w-5 bg-[#FEFAE0] -rotate-45" />
              </span>
            </button>
            <a href="#best-offer" onClick={() => setMenuOpen(false)} className="text-2xl font-medium">Жилой фонд</a>
            <a href="#best-offer" onClick={() => setMenuOpen(false)} className="text-2xl font-medium">Баня</a>
            <a href="#leisure" onClick={() => setMenuOpen(false)} className="text-2xl font-medium">Досуг</a>
            <a href="#infrastructure" onClick={() => setMenuOpen(false)} className="text-2xl font-medium">Сервис</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-2xl font-medium">Отзывы</a>
            <a href="#about-us" onClick={() => setMenuOpen(false)} className="text-2xl font-medium">О нас</a>
            <a href="#reserve" onClick={() => setMenuOpen(false)} className="text-2xl font-medium">Сотрудничество</a>
            <a href="#contacts" onClick={() => setMenuOpen(false)} className="text-2xl font-medium">Контакты</a>

            <a href="#reserve" onClick={() => setMenuOpen(false)} className="mt-4 inline-flex items-center justify-center rounded-md bg-[#70161E] px-12 py-3 text-[16px] font-regular uppercase text-[#FEFAE0]">
              Забронировать
            </a>
          </div>
        )}

        <div className="mt-10 rounded-[0px] sm:rounded-[30px] sm:border-[3px] sm:border-[#1C3144] w-full">
          <div className="rounded-[0px] sm:rounded-[26px] overflow-visible">
            <HeroPage />
          </div>

          <footer id="contacts" className="mt-16 rounded-none md:rounded-[0_0_22px_22px] bg-[#1C3144] px-8 py-8 text-[#FEFAE0] ">

            {/* Mobile footer: centered logo+title, then social icons row; hide extra links */}
            <div className="md:hidden flex flex-col items-center gap-4 text-sm text-[#d9d1c2]">
              <a href="#about-us" className="flex items-center gap-0">
                <img src={icon} alt="Orchard House logo" className="h-10 w-10 object-contain" />
                <div>
                  <p className="font-semibold text-[#70161E] text-[18px] leading-4">ОТДЫХ <br />РОССИИ</p>
                </div>
              </a>
              <div className="flex items-center gap-x-2 mt-4">
                <a href="tel:+79608327054" aria-label="Позвонить">
                  <img src={ph} alt="Phone" className="h-6 w-6 object-contain" />
                </a>
                <a href="">
                  <img src={yt} alt="YouTube" className="h-6 w-6 object-contain" />
                </a>
                <a href="https://t.me/God_mai">
                  <img src={tg} alt="Telegram" className="h-6 w-6 object-contain" />
                </a>
                <a href="https://vk.com/sibyakovavarvara">
                  <img src={vk} alt="VK" className="h-6 w-6 object-contain" />
                </a>
              </div>
              <div className="flex flex-col items-center gap-0 mt-10 mb-4">
                <a href="">
                  <p className="text-sm font-extralight text-[#FEFAE0]">© 2026 Отдых России. Все права защищены.</p>
                </a>
                <a href="">
                  <p className="text-sm font-extralight text-[#FEFAE0]">Политика конфиденциальности</p>
                </a>
              </div>
            </div>

            <div className="hidden md:flex flex-wrap items-center gap-5 text-sm text-[#d9d1c2] md:justify-between">
              <a href="#about-us" className="flex items-center gap-1">
                
                <img src={icon} alt="Orchard House logo" className="h-8 w-8 object-contain" />
                <div>
                  <p className="font-semibold text-[#70161E] text-[16px] leading-4">ОТДЫХ <br />РОССИИ</p>
                </div>
              </a>
              <div className="mx-auto md:absolute md:left-1/2 transform md:-translate-x-1/2">
                <div className="flex flex-col gap-3 text-[#d9d1c2] hover:text-[#FEFAE0] md:flex-row md:items-center text-[14px] ">
                  <a href="#reserve" >Отзывы</a>
                  <a href="#about-us" >О нас</a>
                  <a href="#reserve" >Сотрудничество</a>
                  <a href="#best-offer" >Жилой фонд</a>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center ">
                <a href="tel:+79608327054" aria-label="Позвонить">
                  <img src={ph} alt="Phone" className="h-6 w-6 object-contain" />
                </a>
                <a href="" >
                  <img src={yt} alt="YouTube" className="h-6 w-6 object-contain" />
                </a>
                <a href="https://t.me/God_mai" >
                  <img src={tg} alt="Telegram" className="h-6 w-6 object-contain" />
                </a>
                <a href="https://vk.com/sibyakovavarvara" >
                  <img src={vk} alt="VK" className="h-6 w-6 object-contain" />
                </a>
              </div>
            </div>
          </footer>
          
        </div>
        
        <div className="hidden md:flex items-center justify-center gap-6 py-6">
          <a href="">
            <p className="text-sm text-[#1C3144]">© 2026 Отдых России. Все права защищены.</p>
          </a>
          <a href="">
            <p className="text-sm text-[#1C3144]">Политика конфиденциальности</p>
          </a>
        </div>
      </div>
    </main>
  )
}
