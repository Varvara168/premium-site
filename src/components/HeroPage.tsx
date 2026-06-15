import { useRef, useState } from "react"
import heroImage from "../assets/hero.png"
import searchIcon from "../assets/search.png"
import house337 from "../assets/house337.png"
import transfer from "../assets/image328.png"
import women from "../assets/image330.png"
import blue from "../assets/blue.png"
import culinary from "../assets/image326.png"

export default function Hero() {
  const [showSearchInput, setShowSearchInput] = useState(false)
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  return (
    <div className="overflow-hidden rounded-[26px]">
    <section id="hero" className="relative overflow-hidden rounded-[20px] bg-slate-900/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          className="h-full w-full object-cover object-center"
          alt="Retreat exterior"
        />
        <div className="absolute inset-0 bg-[#12263f]/10" />
      </div>

      <div className="relative z-10 min-h-[800px] px-8 py-20 pt-30 sm:px-12 sm:py-24 sm:pt-40 lg:px-16 lg:py-28 lg:pt-48">
        <div className="max-w-3xl">
          
          <h1 className="mt-8 text-bold leading-none text-[#FEFAE0] md:text-[48px] serif-display">
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
    
    <section id="about-us" className="mt-10 rounded-[20px] bg-[#1C3144] px-20 py-5 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
      <div className="mb-8 space-y-3 text-[#FEFAE0] font-normal text-[28px]">
        <h2>Заслужили доверие особыми <br />местами и сервисом</h2>
      </div>
      <div className="flex flex-col gap-4 text-[11px] sm:flex-row sm:items-start sm:justify-between">
        <div>
            <p className="font-normal text-[#FEFAE0] text-[48px]">6</p>
            <p className="text-[#FEFAE0] font-light text-[16px]">Лет единый уровень <br /> сервиса</p>
        </div>
        <div>
            <p className="font-normal text-[#FEFAE0] text-[48px]">5.0</p>
            <p className="text-[#FEFAE0] font-light text-[16px]">Средняя оценка наших гостей</p>
        </div>
        <button className="inline-flex items-center justify-center w-[270px] rounded-[5px] bg-[#70161E] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
          ПОДРОБНЕЕ О СЕРВИСЕ
        </button>
      </div>
    </section>

    <section id="search" className="mt-12 rounded-[20px]">
      <div className="grid gap-6">
        <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto_minmax(0,1fr)] items-center">
          <label className="min-w-0 rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
            <input
              type="text"
              className="w-full bg-[#FEFAE0] rounded-[5px]  px-6 py-4 text-[16px] font-medium text-[#12263f] outline-none placeholder:text-[#7c8898]"
              placeholder="Дата"
            />
          </label>
          <label className="min-w-0 rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
            <input
              type="text"
              className="w-full bg-[#FEFAE0] rounded-[5px]  px-6 py-4 text-[16px] font-medium text-[#12263f] outline-none placeholder:text-[#7c8898]"
              placeholder="Кол-во гостей"
            />
          </label>
          <label className="min-w-0 rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
            <input
              type="text"
              className="w-full bg-[#FEFAE0] rounded-[5px]  px-6 py-4 text-[16px] font-medium text-[#12263f] outline-none placeholder:text-[#7c8898]"
              placeholder="Пункт назначения"
            />
          </label>
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                setShowSearchInput(true)
                setTimeout(() => searchInputRef.current?.focus(), 0)
              }}
              className="inline-flex h-12 w-12 items-center justify-center bg-transparent p-0 text-[#1C3144] transition hover:text-[#12263f] focus:outline-none"
              aria-label="search"
            >
              <img src={searchIcon} alt="search icon" className="h-15 w-15" />
            </button>

            {showSearchInput && (
              <label className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 min-w-0 rounded-[5px] border border-[#1C3144] bg-[#FEFAE0] w-64">
                <input
                  ref={searchInputRef}
                  onBlur={() => setShowSearchInput(false)}
                  type="text"
                  className="w-full bg-[#FEFAE0] rounded-[5px] px-6 py-4 text-[16px] font-medium text-[#12263f] outline-none placeholder:text-[#7c8898]"
                  placeholder="Поиск по названию"
                />
              </label>
            )}
          </div>
          <button type="button" className="min-w-0 rounded-[5px] bg-[#1C3144] px-6 py-3 text-[20px] font-semibold text-[#FEFAE0] transition hover:bg-[#12263f] w-full">
            Найти
          </button>
        </div>
      </div>
    </section>

    <section id="best-offer" className="mt-12 rounded-[20px] bg-[#92ab79] p-10 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
      <div className="text-[#12263f] flex items-center justify-between gap-8 mb-10 w-full">
          <h2 className="text-[24px] miama">Саратовское водохранилище</h2>
          <p className="text-[20px] miama">Лучшее предложение</p>
          
      </div>
      <div className="grid gap-10 lg:grid-cols-3 -mx-10 items-start">
        
        
        <div className="lg:col-span-1 px-10">
          <div className="flex justify-end mb-20 -mr-20">
            <div className="w-[40px] h-[90px] bg-[#70161E]"></div>
            <div className="w-[40px] h-[90px] bg-[#12263f]"></div>
          </div>
          <div className="">
            <h2 className=" font-medium text-[#FEFAE0] text-[32px] serif-display ">Дом №337</h2>
            <p className="text-[18px] font-light leading-8 text-[#FEFAE0] py-16">Имеется спорная точка зрения, гласящая примерно следующее: тщательные исследования конкурентов, инициированные исключительно синтетически, преданы социально-демократической анафеме. В своём стремлении </p>
          </div>
          <div className="-ml-10 flex">
            <button className="inline-flex items-center justify-center w-[270px] rounded-tr-[5px] rounded-br-[5px] bg-[#1C3144] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
              подробнее
            </button>
          </div>
          
        </div>

        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-[5px] lg:rounded-none w-[700px] h-[800px] max-w-full">
            <img
              src={house337}
              alt="House 337"
              className="block w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="overflow-hidden rounded-[5px] col-span-2 aspect-[3/4]">
              <img src={house337} alt="House 337 - 1" className="block w-full h-full object-cover" />
            </div> 
            <div className="overflow-hidden rounded-[5px] col-span-1 aspect-[3/4]">
              <img src={house337} alt="House 337 - 2" className="block w-full h-full object-cover" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-8 gap-6 items-center">
            <div className="col-span-1" />
            <div className="col-span-7 overflow-hidden rounded-[5px] aspect-[6/3]">
              <img src={house337} alt="House 337 - wide" className="block w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="col-span-3 flex justify-center py-4">
          <button className="inline-flex items-center justify-center w-[270px] rounded-[5px] bg-[#70161E] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
            все дома
          </button>
        </div>
      </div>

      
    </section>

    <section id="leisure" className="mt-20 rounded-[20px] px-20 py-12 ">
      <div className="mb-16  text-[#1C3144] font-medium text-[32px]">
        <h2>Досуг на территории</h2>
      </div>
      <div className="">
        
        <div className="grid grid-cols-4 -gap-20 mt-6 -mx-40 items-center">
          <div className="overflow-hidden rounded-[5px] col-span-1 aspect-[3/2]">
            <img src={house337} alt="House 337 - 2" className="block w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[5px] col-span-2 aspect-[3/2]">
            <img src={house337} alt="House 337 - 1" className="block w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[5px] col-span-1 aspect-[3/2]">
            <img src={house337} alt="House 337 - 3" className="block w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-20 py-12">
          <div className="col-span-1 space-y-4">
            <p className="font-medium text-[20px]">Развлечение 1</p>
            <p>Имеется спорная точка зрения, гласящая примерно следующее: тщательные исследования конкурентов, инициированные исключительно синтетически, преданы социально-демократической анафеме. В своём стремлении </p>
          </div>
          <div className="col-span-1">
            <div className="flex justify-content gap-6 mb-4">
              <p className="font-medium text-[20px]">Цена</p>
              <p>10000 руб.</p>
            </div>
            <div className="flex justify-content gap-6 mb-4">
              <p className="font-medium text-[20px]">Локация</p>
              <p>Книжный клуб</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex justify-center py-8">
          <button className="inline-flex items-center justify-center w-[270px] rounded-[5px] bg-[#70161E] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
            больше о досуге
          </button>
        </div>
      </div>
    </section>

    <section id="infrastructure" className="mt-10 rounded-[28px] px-20 py-12 ">
      <div className="mb-16 text-[#1C3144] font-medium text-[32px]">
        <p className="py-2">Инфраструктура комплексов</p>
        <p className="text-[16px]  font-normal">Всё устроено так, чтобы вы не думали о мелочах <br />Разрешите себе отдыхать <br />Это место, где не нужно пытаться понравиться</p>
      </div>
      <div className="grid gap-30 px-24 -mt-8">
        
        <div className="grid gap-10 sm:grid-cols-2 items-end">
          <div className="">
            <div className="overflow-hidden rounded-[5px] col-span-1 aspect-[4/3]">
              <img src={transfer} alt="House 337 - 1" className="block w-full h-full object-cover" />
            </div> 
            
          </div>
          <div className="">
            <div className="overflow-hidden rounded-[5px] col-span-1 max-h-[300px] aspect-[3/4]">
              <img src={women} alt="House 337 - 1" className="block w-full h-full object-cover" />
            </div> 
            
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <p className="py-4">Трансфер для вас</p>
          <p className="py-4">Личный помошник на всё время <br />отдыха</p>
        </div>
        
      </div>
    </section>

    <section id="culinary" className="relative mt-16 rounded-[20px] bg-[#12263f] px-20 py-10 text-[#FEFAE0] ">
      <img src={blue} alt="decor" className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 md:w-40" />
      <div className="grid lg:grid-cols-2 gap-10">

        <div className="overflow-hidden rounded-tr-[5px] rounded-br-[5px] col-span-1 aspect-[4/3] -ml-20">
          <img src={culinary} alt="House 337 - 1" className="block w-full h-full object-cover" />
        </div>
        
        <div className="py-8"> 
          <h2 className="text-[18px] leading-tight miama text-[#FEFAE0]">Фермерские продукты и простая еда натуральный вкус региона</h2>
          <div className="py-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-[16px] font-light text-[#FEFAE0]">01</span>
                <p className="text-[16px] font-light  leading-tight">Основа — шведский стол</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[16px] font-light text-[#FEFAE0]">02</span>
                <p className="text-[16px] font-light  leading-tight">Настоящий вкус региона</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[16px] font-light text-[#FEFAE0]">03</span>
                <p className="text-[16px] font-light  leading-tight">Если хочется большего — можно заказать отдельно</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[16px] font-light text-[#FEFAE0]">04</span>
                <p className="text-[16px] font-light  leading-tight">Атмосфера загородного отдыха ощущается полностью</p>
              </div>
            </div>
          </div>
          <button className="inline-flex items-center justify-center w-[270px] rounded-[5px] bg-[#70161E] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
            ПОДРОБНЕЕ О СЕРВИСЕ
          </button>
        
      </div>
      </div>
    </section>

    <section id="reserve" className="px-8 py-36 ">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="">
          <p className="mb-8 text-[#12263f] font-normal text-[28px]">Форма для упрощения выбора</p>
     
          <div className="flex flex-col gap-4 pl-16 text-[11px] ">
            <div className="flex items-center gap-4">
              <p className="font-normal  text-[52px]">24</p>
              <p className=" font-normal text-[16px]">Часа в сутки готовы ответить <br /> на вопросы</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-normal  text-[52px]">10</p>
              <p className=" font-normal text-[16px]">Минут средняя длина решения <br />по месту отдыха с попаданием <br />в  потребность</p>
            </div>
          </div>
        </div>
        <form className="space-y-6 p-6 ">
          
          <div className="space-y-2">
            <label className="block rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
              <span className="sr-only">Фамилия Имя</span>
              <input
                type="text"
                className="w-full bg-[#FEFAE0] rounded-[5px] px-6 py-4 text-[14px] font-normal text-[#12263f]"
                placeholder="Фамилия Имя"
              />
            </label>
            <label className="block rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
              <span className="sr-only">Номер телефона</span>
              <input
                type="tel"
                className="w-full bg-[#FEFAE0] rounded-[5px] px-6 py-4 text-[14px] font-normal text-[#12263f]"
                placeholder="Номер телефона"
              />
            </label>
            <label className="block rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
              <span className="sr-only">Город назначения</span>
              <input
                type="text"
                className="w-full bg-[#FEFAE0] rounded-[5px] px-6 py-4 text-[14px] font-normal text-[#12263f]"
                placeholder="Город назначения"
              />
            </label>
            <label className="block rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
              <span className="sr-only">Дата</span>
              <input
                type="text"
                className="w-full bg-[#FEFAE0] rounded-[5px] px-6 py-4 text-[14px] font-normal text-[#12263f]"
                placeholder="Дата"
              />
            </label>
            <label className="min-w-0 block rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
              <span className="sr-only">Время для связи</span>
              <input
                type="text"
                className="w-full bg-[#FEFAE0] rounded-[5px] px-6 py-4 text-[14px] font-normal text-[#12263f]"
                placeholder="Время для связи"
              />
            </label>
          </div>
          <button className="inline-flex items-center justify-center w-[270px] rounded-[5px] bg-[#70161E] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
            отправить запрос
          </button>
        </form>
      </div>
    </section>

    <section id="location" className="mt-16 rounded-[20px] bg-white px-8 py-10 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] bg-[#12263f] p-8 text-[#FEFAE0] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#d9d1c2]/80">Location</p>
          <h3 className="mt-4 text-3xl font-[300] leading-tight">Тихая загородная деревня, рука об руку с природой.</h3>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#d9d1c2]/85">Свежий воздух, лесные тропы и приватная территория в шаге от исторического озера.</p>
          <div className="mt-8 space-y-4 rounded-[24px] bg-[#1b2a44] p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d9d1c2]/70">Address</p>
            <p className="text-lg font-medium">Village estate, North region</p>
            <p className="text-sm text-[#d9d1c2]/80">Private access, 35 minutes from town</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-[28px] bg-[#d9d1c2] p-6">
          <div className="h-[420px] rounded-[28px] bg-[linear-gradient(135deg,rgba(17,24,39,0.08),rgba(161,31,43,0.18))]" />
        </div>
      </div>
    </section>

    <section id="news" className="mt-16 rounded-[20px] bg-[#f5ecdf] px-8 py-10 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div className="space-y-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Editorial closing</p>
          <h2 className="text-4xl font-[300] leading-tight text-[#12263f]">Лаконичное завершение истории.</h2>
          <p className="max-w-xl text-base leading-8 text-[#12263f]/80">Каждый модуль этого пространства построен как страница каталога, где простор и эстетика объединяются в формат приватного ретрита.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[28px] bg-[#d9d1c2] p-6 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
            <div className="h-56 rounded-[24px] bg-[#12263f]/10" />
          </div>
          <div className="grid gap-6">
            <div className="rounded-[28px] bg-[#12263f]/10 p-6 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
              <div className="h-40 rounded-[24px] bg-[#12263f]/10" />
            </div>
            <div className="rounded-[28px] bg-[#d9d1c2] p-6 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
              <div className="h-28 rounded-[20px] bg-[#12263f]/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
