import { useRef, useState } from "react"
import heroImage from "../assets/hero.png"
import searchIcon from "../assets/search.png"
import house337 from "../assets/house337.png"
import transfer from "../assets/image328.png"
import women from "../assets/image330.png"
import blue from "../assets/blue.png"
import culinary from "../assets/image326.png"
import map from "../assets/map.png"
import img1 from "../assets/1_png.png"
import img2 from "../assets/2_png.png"
import liesure from "../assets/image 158.png"

export default function Hero() {
  const [showSearchInput, setShowSearchInput] = useState(false)
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  return (
    <div className="overflow-hidden rounded-[26px]">
    <section id="hero" className="relative overflow-hidden rounded-[20px] bg-slate-900/5 ">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          className="h-full w-full object-cover object-center"
          alt="Retreat exterior"
        />
        <div className="absolute inset-0 bg-[#1C3144]/10" />
      </div>

      <div className="relative z-10 min-h-[520px] px-6 py-12 sm:px-12 sm:py-20 md:min-h-[800px] lg:px-16 lg:py-28">
        <div className="max-w-3xl">
          
          <h1 className="mt-8 text-bold leading-tight text-[#FEFAE0] text-[34px] sm:text-[36px] md:text-[48px] serif-display">
            Приватный отдых <br />
            в живописных регионах России 
          </h1>
          <p className="hidden md:block mt-4 font-thin text-[14px] sm:text-[16px] md:text-[20px] text-[#FEFAE0]/75 ">
            Пространство для восстановления себя. <br />
            Новый опыт созданный для вас
          </p>
        </div>
      </div>

    </section>
    {/* Mobile subtitle under the image */}
    <div className="md:hidden px-4 mt-4">
      <p className="text-[#1C3144] text-[16px] font-normal">
        Пространство для восстановления себя. Новый опыт созданный для вас
      </p>
    </div>
    
    <section id="about-us" className="mt-10 rounded-[20px] bg-[#1C3144] px-8 py-14 sm:px-20 sm:py-8">
      <div className="mb-8 space-y-3 text-[#FEFAE0] font-normal text-[20px] sm:text-[28px]">
        <h2>Заслужили доверие особыми <br />местами и сервисом</h2>
      </div>
      <div className="flex flex-col gap-8 text-[11px] sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex flex-row items-center gap-4 sm:flex-col sm:items-start">
          <p className="font-normal text-[#FEFAE0] text-[40px] sm:text-[48px]">6</p>
          <p className="text-[#FEFAE0] font-light text-[14px] sm:text-[16px] ml-2 sm:ml-0">Лет единый уровень <br/> сервиса</p>
        </div>
        <div className="flex flex-row items-center gap-4 sm:flex-col sm:items-start">
          <p className="font-normal text-[#FEFAE0] text-[40px] sm:text-[48px]">5.0</p>
          <p className="text-[#FEFAE0] font-light text-[14px] sm:text-[16px] ml-2 sm:ml-0">Средняя оценка наших гостей</p>
        </div>
        <button className="inline-flex items-center justify-center w-full sm:w-[270px] rounded-[5px] bg-[#70161E] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
          ПОДРОБНЕЕ О СЕРВИСЕ
        </button>
      </div>
    </section>

    <section id="search" className="mt-12 rounded-[20px] px-8 md:px-0">
      <div className="grid gap-6">
        {/* Mobile layout: date + find button on one line, below - search field with icon */}
        <div className="md:hidden">
          <div className="flex items-center gap-3">
            <label className="flex-1 min-w-0 rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
              <input
                type="text"
                className="w-full bg-[#FEFAE0] rounded-[5px] px-4 py-3 text-[16px] font-medium text-[#1C3144] outline-none placeholder:text-[#7c8898]"
                placeholder="Фильтры"
              />
            </label>
            <button type="button" className="flex-1 rounded-[5px] bg-[#1C3144] px-4 py-3 text-[16px] font-semibold text-[#FEFAE0] transition hover:opacity-90">
              Найти
            </button>
          </div>

          <label className="relative mt-3 block rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
            <img src={searchIcon} alt="search" className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 object-contain" />
            <input
              type="text"
              className="w-full bg-[#FEFAE0] rounded-[5px] pl-12 pr-4 py-3 text-[16px] font-medium text-[#1C3144] outline-none placeholder:text-[#7c8898]"
              placeholder="Поиск по названию"
            />
          </label>
        </div>

        {/* Desktop/tablet layout: keep existing complex grid */}
        <div className="hidden md:grid gap-2 grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto_minmax(0,1fr)] items-center">
          <label className="min-w-0 rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
            <input
              type="text"
              className="w-full bg-[#FEFAE0] rounded-[5px]  px-6 py-4 text-[16px] font-medium text-[#1C3144] outline-none placeholder:text-[#7c8898]"
              placeholder="Дата"
            />
          </label>
          <label className="min-w-0 rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
            <input
              type="text"
              className="w-full bg-[#FEFAE0] rounded-[5px]  px-6 py-4 text-[16px] font-medium text-[#1C3144] outline-none placeholder:text-[#7c8898]"
              placeholder="Кол-во гостей"
            />
          </label>
          <label className="min-w-0 rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
            <input
              type="text"
              className="w-full bg-[#FEFAE0] rounded-[5px]  px-6 py-4 text-[16px] font-medium text-[#1C3144] outline-none placeholder:text-[#7c8898]"
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
              className="inline-flex h-12 w-12 items-center justify-center bg-transparent p-0 text-[#1C3144] transition hover:text-[#1C3144] focus:outline-none"
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
          <button type="button" className="min-w-0 rounded-[5px] bg-[#1C3144] px-6 py-3 text-[18px] sm:text-[20px] font-semibold text-[#FEFAE0] transition hover:bg-[#1C3144] w-full">
            Найти
          </button>
        </div>
      </div>
    </section>

    <section id="best-offer" className="mt-12 rounded-[20px] bg-[#92ab79] px-8 py-14 sm:px-20 sm:py-8 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
      <div className="text-[#1C3144] flex items-center justify-between gap-8 mb-10 w-full">
          <h2 className="text-[24px] miama">Саратовское водохранилище</h2>
          <p className="text-[20px] miama">Лучшее предложение</p>
          
      </div>
      <div className="grid gap-10 lg:grid-cols-3 items-start">
        
        
        <div className="lg:col-span-1 px-10 hidden lg:block">
          <div className="hidden md:flex justify-end mb-20 -mr-20">
              <div className="w-[40px] h-[90px] bg-[#70161E]"></div>
              <div className="w-[40px] h-[90px] bg-[#1C3144]"></div>
            </div>
          <div className="">
            <h2 className=" font-medium text-[#FEFAE0] text-[32px] serif-display ">Дом №337</h2>
            <p className="text-[16px] font-light text-[#FEFAE0] py-16">Имеется спорная точка зрения, гласящая примерно следующее: тщательные исследования конкурентов, инициированные исключительно синтетически, преданы социально-демократической анафеме. В своём стремлении </p>
          </div>
          <div className="-ml-10 flex">
            <button className="inline-flex items-center justify-center w-[270px] rounded-tr-[5px] rounded-br-[5px] bg-[#1C3144] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
              подробнее
            </button>
          </div>
          
        </div>

        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-[5px] lg:rounded-none w-full h-[300px] sm:h-[500px] lg:h-[800px] max-w-full">
            <img
              src={house337}
              alt="House 337"
              className="block w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="overflow-hidden rounded-[5px] col-span-2 aspect-[3/4]">
              <img src={house337} alt="House 337 - 1" className="block w-full h-full object-cover" />
            </div> 
            <div className="overflow-hidden rounded-[5px] col-span-1 aspect-[3/4]">
              <img src={house337} alt="House 337 - 2" className="block w-full h-full object-cover" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-8 gap-6 items-center">
            <div className="col-span-1" />
            <div className="col-span-1 sm:col-span-7 overflow-hidden rounded-[5px] aspect-[6/3]">
              <img src={house337} alt="House 337 - wide" className="block w-full h-full object-cover" />
            </div>
          </div>
          {/* Mobile: move description + button under images */}
          <div className="lg:hidden px-4 mt-6">
            <div className="">
              <h2 className="font-medium text-[#FEFAE0] text-[32px] serif-display">Дом №337</h2>
              <p className="text-[16px] font-light text-[#FEFAE0] py-4">Имеется спорная точка зрения, гласящая примерно следующее: тщательные исследования конкурентов, инициированные исключительно синтетически, преданы социально-демократической анафеме. В своём стремлении </p>
            </div>
            <div className="flex justify-center mt-2">
              <button aria-label="Подробнее" className="inline-flex items-center justify-center w-12 h-12 rounded-[5px] bg-[#1C3144] text-[#FEFAE0] transition duration-300 hover:opacity-90">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex justify-center py-4">
          <button className="inline-flex items-center justify-center w-full sm:w-[270px] rounded-[5px] bg-[#70161E] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
            ВСЕ ДОМА
          </button>
        </div>
      </div>

      
    </section>
    
    <section id="leisure" className="mt-20 rounded-[20px] px-6 sm:px-20 py-12 ">
      <div className="mb-16  text-[#1C3144] font-medium text-[32px]">
        <h2>Досуг на территории</h2>
      </div>
      <div className="">
        
        <div className="grid grid-cols-1 sm:grid-cols-4 sm:-gap-20 mt-6 sm:-mx-40 gap-4 justify-items-center gap-x-0 mt-6 items-center">
          <div className="hidden sm:block overflow-hidden rounded-[5px] col-span-1 aspect-[3/2]">
            <img src={house337} alt="House 337 - 2" className="block w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[5px] col-span-1 sm:col-span-2 aspect-[3/4] sm:aspect-[3/2]">
            <img src={liesure} alt="House 337 - 1" className="block w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block overflow-hidden rounded-[5px] col-span-1 aspect-[3/2]">
            <img src={house337} alt="House 337 - 3" className="block w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-20 py-12">
          <div className="col-span-1 space-y-4">
            <p className="text-[16px]">Развлечение 1</p>
            <p className="text-[18px] ">Имеется спорная точка зрения, гласящая примерно следующее: тщательные исследования конкурентов, инициированные исключительно синтетически, преданы социально-демократической анафеме. В своём стремлении </p>
          </div>
          <div className="col-span-1">
            
            <div className="col-span-1 space-y-2">
              <p className="text-[16px]">Локация</p>
              <p className="text-[20px]">Книжный клуб</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex justify-center py-8">
          <button className="inline-flex items-center justify-center w-full sm:w-[270px] rounded-[5px] bg-[#70161E] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
            больше о досуге
          </button>
        </div>
      </div>
    </section>
    
    <section id="infrastructure" className="mt-10 rounded-[28px] px-6 sm:px-20 py-12 ">
      <div className="mb-16 text-[#1C3144] font-medium text-[32px]">
        <p className="py-2">Инфраструктура комплексов</p>
        <p className="text-[16px]  font-normal">Всё устроено так, чтобы вы не думали о мелочах <br />Разрешите себе отдыхать <br />Это место, где не нужно пытаться понравиться</p>
      </div>
      <div className="grid gap-6 md:gap-30 px-0 md:px-24 md:-mt-8">
        {/* Desktop: keep images + texts layout (hidden on mobile) */}
        <div className="hidden md:block">
          <div className="grid gap-6 sm:grid-cols-2 items-end">
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
          <div className="grid gap-6 sm:grid-cols-2">
            <p className="py-4">Трансфер для вас</p>
            <p className="py-4">Личный помошник на всё время <br />отдыха</p>
          </div>
        </div>

        {/* Mobile: 3-column grid — each item spans 2/3 (col-span-2) and stacks vertically */}
        <div className="md:hidden px-0">
          <div className="grid grid-cols-6 gap-x-6 gap-y-10">
            <div className="col-span-5">
              <div className="overflow-hidden rounded-[5px] aspect-[4/3]">
                <img src={transfer} alt="Transfer" className="block w-full h-full object-cover" />
              </div>
              <p className="pt-3 text-[16px]">Трансфер для вас</p>
            </div>

            <div className="col-start-3 col-span-4">
              <div className="overflow-hidden rounded-[5px] max-h-[300px] aspect-[3/4]">
                <img src={women} alt="Assistant" className="block w-full h-full object-cover" />
              </div>
              <p className="pt-3 text-[16px]">Личный помошник всё время отдыха</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="culinary" className="relative mt-16 rounded-[20px] bg-[#1C3144] px-6  sm:px-20 py-10 text-[#FEFAE0] ">
      <img src={blue} alt="decor" className="absolute -top-11 sm:-top-12 left-1/2 -translate-x-1/2  sm:w-24 md:w-40" />
      <div className="grid lg:grid-cols-2 gap-10">

        <div className="overflow-hidden sm:rounded-tr-[5px] sm:rounded-br-[5px] rounded-[5px] lg:rounded-none lg:rounded-tr-[5px] lg:rounded-br-[5px] col-span-1 aspect-[4/3] -mx-6 sm:-ml-20">
          <img src={culinary} alt="House 337 - 1" className="block w-full h-full object-cover" />
        </div>
        
        <div className="sm:py-8 space-y-4"> 
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
          <button className="inline-flex items-center justify-center w-full sm:w-[270px] rounded-[5px] bg-[#70161E] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
            ПОДРОБНЕЕ О СЕРВИСЕ
          </button>
        
      </div>
      </div>
    </section>

    <section id="reserve" className="px-6 sm:px-8 py-20 sm:py-36 ">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="">
          <p className="mb-12 sm:mb-8 text-[#1C3144] font-normal text-[28px]">Форма для упрощения выбора</p>
     
          <div className="flex flex-col gap-4 sm:pl-16 text-[11px] ">
            <div className="flex items-center gap-4">
              <p className="font-normal  text-[52px]">24</p>
              <p className=" font-normal text-[16px]">Часа в сутки готовы ответить <br /> на вопросы</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-normal  text-[52px]">10</p>
              <p className=" font-normal text-[16px]">Минут средняя длина решения <br className="hidden md:block"/>по месту отдыха с попаданием <br className="hidden md:block" />в  потребность</p>
            </div>
          </div>
        </div>
        <form className="space-y-6 p-0 sm:p-6 ">
          
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
            <label className="min-w-0 block rounded-[5px] border border-[#1C3144] bg-[#FEFAE0]">
              <span className="sr-only">Время для связи</span>
              <input
                type="text"
                className="w-full bg-[#FEFAE0] rounded-[5px] px-6 py-4 text-[14px] font-normal text-[#12263f]"
                placeholder="Время для связи"
              />
            </label>
          </div>
          <button className="inline-flex items-center justify-center w-full sm:w-[270px] rounded-[5px] bg-[#70161E] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
            отправить запрос
          </button>
        </form>
      </div>
    </section>
    
    <section id="location" className="mt-16 rounded-[20px] py-1">
      <div className="relative ">
        {/* Mobile: blue background — heading, then map image, then contact text */}
        <div className="md:hidden">
          <div className="mt-4 rounded-[15px] bg-[#1C3144] p-6 text-[#FEFAE0]">
            <p className="mb-10 text-[28px]">Главный офис</p>

            <div className="overflow-hidden rounded-[5px] aspect-[4/3] -mx-6">
              <img src={map} alt="Map" className="block w-full h-full object-cover" />
            </div>

            <div className="mt-14 space-y-4 ">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-light">Телефон:</span>
                <p className="text-[16px] font-light leading-tight">+7 1234567890</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-light">Почта:</span>
                <p className="text-[16px] font-light leading-tight">mail@yandex.ru</p>
              </div>
              <div className="flex items-start gap-2 ">
                <span className="text-[16px] font-light">Адрес:</span>
                <p className="text-[16px] font-light leading-tight">г. Самара, Ново-Садовая 44, офис 111</p>
              </div>
              
            </div>
            <a href="">
              <p className="text-[16px] font-extralight text-[#FEFAE0] mt-14">Полный список адресов</p>
            </a>
          </div>
        </div>

        <div className="hidden md:block w-full sm:w-[440px] h-auto sm:h-[530px] rounded-[20px] bg-[#1C3144] p-8 sm:p-20 text-[#FEFAE0]">
          <div>
            <p className="mb-8 text-[#FEFAE0] font-normal text-[28px]">
              Главный офис
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-light text-[#FEFAE0]">Телефон:</span>
                <p className="text-[16px] font-light leading-tight">+7 1234567890</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[16px] font-light text-[#FEFAE0]">Почта:</span>
                <p className="text-[16px] font-light leading-tight">mail@yandex.ru</p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[16px] font-light text-[#FEFAE0]">Адрес:</span>
                <p className="text-[16px] font-light leading-tight">г. Самара, Ново-Садовая 44,<br />офис 111</p>
              </div>
            </div>

            <a href="">
              <p className="text-[16px] font-extralight text-[#FEFAE0] mt-28">Полный список адресов</p>
            </a>
          </div>
        </div>

        <div className="absolute top-11 left-[380px] z-20 hidden sm:block">
          <img src={map} alt="Map" className="w-full h-[440px]  rounded-[5px] object-cover" />
        </div>

      </div>
    </section>

    <section id="news" className="mt-16 rounded-[20px] px-8 py-6 sm:py-28 text-[#12263f]">
      {/* Desktop two-column layout (kept unchanged) */}
      <div className="hidden md:grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 mb-16 col-span-1">
          <p className="mb-8 font-normal text-[32px]">Что у нас нового</p>
          <h2 className="text-[24px]">Подарочные карты</h2>
          <p className="text-[16px] ">Подарок для чувств Подарите отдых, гастрономические впечатления или спа-процедуры. Это верный способ сказать «люблю тебя», «спасибо», «я скучаю» или «с днем рождения». Кого вы хотите порадовать?</p>
        </div>
        <div className="grid grid-cols-5 items-center">
          <div className="rounded-[5px] col-span-3 overflow-hidden aspect-[5/6]">
            <img src={img1} alt="News 1" className="block w-full h-full object-cover rounded-[5px]" />
          </div>
          <div className="rounded-[5px] col-span-2 overflow-hidden aspect-[5/6] relative">
            <img
              src={img2}
              alt="News 2"
              className="block w-full h-full object-cover rounded-[5px] filter brightness-75 contrast-115 saturate-70 blur-[5px]"
            />
            <div className="absolute inset-0 rounded-[5px] bg-[#FEFAE0]/60 mix-blend-screen pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mobile: title -> first image -> remaining text and button */}
      <div className="md:hidden space-y-6 mb-6">
        <p className="mb-2 font-normal text-[28px]">Что у нас нового</p>
        <div className="rounded-[5px] overflow-hidden aspect-[5/6]">
          <img src={img1} alt="News 1" className="block w-full h-full object-cover rounded-[5px]" />
        </div>
        <div className="space-y-2">
          <h2 className="text-[20px]">Подарочные карты</h2>
          <p className="text-[16px]">Подарок для чувств Подарите отдых, гастрономические впечатления или спа-процедуры. Это верный способ сказать «люблю тебя», «спасибо», «я скучаю» или «с днем рождения». Кого вы хотите порадовать?</p>
        </div>
      </div>

      <div className="py-12 flex justify-center">
        <button className="inline-flex items-center justify-center w-full sm:w-[270px] rounded-[5px] bg-[#1C3144] px-8 py-4 text-[16px] font-regular uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
          УЗНАТЬ ПОДРОБНЕЕ
        </button>
      </div>
    </section>
    </div>
  )
}
