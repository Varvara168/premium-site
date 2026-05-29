import Hero from "./components/Hero"
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
            <div className="flex items-center gap-0">
              <img src={icon} alt="Orchard House logo" className="h-12 w-12 object-contain" />
              <div>
                <p className="text-sm font-bold text-[#70161E] text-[20px]">ОТДЫХ <br />РОССИИ</p>
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

            <a href="#reserve" className="inline-flex items-center justify-center rounded-md bg-[#70161E] px-10 py-3 text-sm font-regular tracking-[0.1em] uppercase text-[#FEFAE0] transition duration-300 hover:opacity-90">
              Забронировать
            </a>
          </div>
        </header>

        <div className="mt-10 rounded-[30px] border-[3px] border-[#1C3144]">
          <div className="overflow-hidden rounded-[30px]">
              <Hero />

        <section className="mt-10 rounded-[28px] bg-[#f6eee1] px-8 py-5 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
          <div className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70 sm:flex-row sm:items-center sm:justify-between">
            <span>Country estate · curated retreat · editorial design</span>
            <div className="flex flex-wrap items-center gap-4">
              <span>summer season</span>
              <span className="h-4 w-px bg-[#12263f]/20" />
              <span>nature wellness</span>
              <span className="h-4 w-px bg-[#12263f]/20" />
              <span>architecture stories</span>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-12 rounded-[32px] bg-[#92ab79]/15 p-10 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#12263f]/15 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#12263f]/80 backdrop-blur-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#70161E]" /> Sustainability by design
              </div>
              <div className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Retreat narrative</p>
                <h2 className="text-4xl font-[300] leading-tight text-[#12263f] md:text-5xl serif-display">Современная загородная резиденция с камерным вниманием к деталям.</h2>
                <p className="max-w-xl text-base leading-8 text-[#12263f]/80">Медитативный интерьер, авторская кухня и природное окружение создают атмосферу дорогого книжного каталога и премиального eco resort.</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#reserve" className="inline-flex items-center justify-center rounded-md bg-[#70161E] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FEFAE0] transition duration-300 hover:opacity-90">
                  Discover stay
                </a>
                <div className="rounded-3xl bg-white/90 p-5 shadow-[0_10px_30px_rgba(17,24,39,0.06)]">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/60">Private arrival</p>
                  <p className="mt-3 text-2xl font-semibold text-[#12263f]">11 suites</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="relative overflow-hidden rounded-[28px] bg-[#d9d1c2] p-6">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center opacity-30" />
                <div className="relative space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/80">House concept</p>
                  <h3 className="text-2xl font-medium text-[#12263f]">Архитектурная история и природный контекст.</h3>
                  <p className="text-sm leading-7 text-[#12263f]/70">аждый уголок создан для неспешного отдыха, тихих завтраков на террасе и вечерних прогулок.</p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="rounded-[28px] bg-[#fff] p-6 shadow-[0_10px_30px_rgba(17,24,39,0.06)]">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Atelier pool</p>
                  <p className="mt-4 text-lg font-semibold text-[#12263f]">Одна зона с видом на зелёную долину.</p>
                </div>
                <div className="rounded-[28px] bg-[#fff] p-6 shadow-[0_10px_30px_rgba(17,24,39,0.06)]">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Library lounge</p>
                  <p className="mt-4 text-lg font-semibold text-[#12263f]">Тишина, книги и деревенский уют в авторской стилистике.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] bg-[#d9d1c2] p-8 shadow-[0_10px_30px_rgba(17,24,39,0.06)]">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Ritual</p>
                <p className="mt-4 text-2xl font-semibold text-[#12263f]">Спа-программа</p>
              </div>
              <div className="rounded-[28px] bg-[#fff] p-8 shadow-[0_10px_30px_rgba(17,24,39,0.06)]">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Studio</p>
                <p className="mt-4 text-2xl font-semibold text-[#12263f]">Творческие мастер-классы</p>
              </div>
            </div>
            <div className="rounded-[32px] bg-[#fff] p-10 shadow-[0_10px_40px_rgba(17,24,39,0.06)]">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Editorial gallery</p>
              <h3 className="mt-4 text-3xl font-[350] text-[#12263f]">Сеть тихих картин и деталей в каждом помещении.</h3>
              <p className="mt-4 text-sm leading-7 text-[#12263f]/75">лавные формы, натуральные материалы и редкая фактура создают атмосферу дорогой полиграфии.</p>
            </div>
          </div>
        </section>

        <section id="benefits" className="mt-16 rounded-[28px] bg-[#f5ecdf] px-8 py-12 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[24px] bg-white p-8 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Calm</p>
                <p className="mt-4 text-xl font-semibold text-[#12263f]">Собственное пространство</p>
              </div>
              <div className="rounded-[28px] bg-[#d9d1c2] p-8 shadow-[0_10px_30px_rgba(17,24,39,0.06)]">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Centerpiece</p>
                <p className="mt-4 text-2xl font-semibold text-[#12263f]">Три уровня отдыха</p>
              </div>
              <div className="rounded-[24px] bg-white p-8 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Signature</p>
                <p className="mt-4 text-xl font-semibold text-[#12263f]">алый формат, большой характер</p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Why retreat</p>
              <h2 className="text-4xl font-[300] leading-tight text-[#12263f]">Три уровня атмосферы, которые формируют приватный отдых.</h2>
              <p className="max-w-xl text-base leading-8 text-[#12263f]/80">аждая деталь — от материалов до света — выстроена вокруг ощущения медленного ритма, редкой красоты и полной заботы.</p>
              <a href="#experience" className="inline-flex items-center justify-center rounded-md bg-[#70161E] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FEFAE0] transition duration-300 hover:opacity-90">
                Explore details
              </a>
            </div>
          </div>
        </section>

        <section id="infrastructure" className="mt-16 rounded-[28px] bg-white px-8 py-12 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Infrastructure</p>
              <h2 className="text-4xl font-[300] leading-tight text-[#12263f]">ространства, наполненные смыслом.</h2>
              <p className="max-w-xl text-base leading-8 text-[#12263f]/75">ва отдельных ядра для приема гостей, работы и расслабления формируют архитектурную структуру резиденции.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[28px] bg-[#f5ecdf] p-6 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
                <div className="mb-4 h-44 rounded-[24px] bg-[url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
                <p className="text-[13px] uppercase tracking-[0.35em] text-[#12263f]/70">Guest house</p>
                <p className="mt-3 text-lg font-semibold text-[#12263f]">Тихие апартаменты с личными террасами.</p>
              </div>
              <div className="rounded-[28px] bg-[#f5ecdf] p-6 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
                <div className="mb-4 h-44 rounded-[24px] bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
                <p className="text-[13px] uppercase tracking-[0.35em] text-[#12263f]/70">Garden House</p>
                <p className="mt-3 text-lg font-semibold text-[#12263f]">Общая кухня, библиотека и зимний сад.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="culinary" className="mt-16 rounded-[28px] bg-[#12263f] px-8 py-10 text-[#FEFAE0] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="rounded-[28px] bg-[#1b2a44] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <div className="h-[420px] rounded-[28px] bg-[url('https://images.unsplash.com/photo-1541544181557-5c04c29f8c27?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
            </div>
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#f5ecdf]/80">Gastronomy</p>
              <h2 className="text-4xl font-[300] leading-tight text-[#FEFAE0]">Тёмная гастрономическая глава.</h2>
              <p className="max-w-xl text-base leading-8 text-[#d9d1c2]/85">Авторское меню, локальные продукты и спокойная вечерняя сервировка в атмосфере private dinner.</p>
              <div className="space-y-4 rounded-[24px] bg-[#12263f]/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm uppercase tracking-[0.35em] text-[#d9d1c2]/70">Craft</span>
                  <span className="text-sm font-semibold">Seasonal menu</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm uppercase tracking-[0.35em] text-[#d9d1c2]/70">Private</span>
                  <span className="text-sm font-semibold">Chef table</span>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm uppercase tracking-[0.35em] text-[#d9d1c2]/70">Season</span>
                  <span className="text-sm font-semibold">Forest harvest</span>
                </div>
              </div>
              <a href="#reserve" className="inline-flex items-center justify-center rounded-md bg-[#70161E] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FEFAE0] transition duration-300 hover:opacity-90">
                Reserve table
              </a>
            </div>
          </div>
        </section>

        <section id="reserve" className="mt-16 rounded-[28px] bg-[#f8f1e7] px-8 py-10 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="space-y-8">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Statistics</p>
              <div className="space-y-6 rounded-[28px] bg-white/90 p-8 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
                <div className="text-5xl font-semibold text-[#12263f]">42</div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#12263f]/70">private experiences per season</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[24px] bg-white p-6 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
                  <p className="text-sm font-semibold text-[#12263f]">11 suites</p>
                  <p className="mt-3 text-sm leading-6 text-[#12263f]/75">Дизайн в минималистичном стиле и натуральные материалы.</p>
                </div>
                <div className="rounded-[24px] bg-white p-6 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
                  <p className="text-sm font-semibold text-[#12263f]">Carrara rituals</p>
                  <p className="mt-3 text-sm leading-6 text-[#12263f]/75">Спа-программы на базе трав и мягкой энергетики места.</p>
                </div>
              </div>
            </div>
            <form className="space-y-6 rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#12263f]/70">Enquiry</p>
              <h3 className="text-3xl font-[300] text-[#12263f]">Request your private stay</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[#12263f]/80">
                  Name
                  <input className="w-full rounded-[14px] border border-[#12263f]/10 bg-[#f5ecdf] px-4 py-3 text-sm text-[#12263f] outline-none transition focus:border-[#70161E]" type="text" placeholder="Your name" />
                </label>
                <label className="space-y-2 text-sm text-[#12263f]/80">
                  Email
                  <input className="w-full rounded-[14px] border border-[#12263f]/10 bg-[#f5ecdf] px-4 py-3 text-sm text-[#12263f] outline-none transition focus:border-[#70161E]" type="email" placeholder="you@email.com" />
                </label>
              </div>
              <label className="space-y-2 text-sm text-[#12263f]/80">
                Message
                <textarea className="min-h-[150px] w-full rounded-[14px] border border-[#12263f]/10 bg-[#f5ecdf] px-4 py-3 text-sm text-[#12263f] outline-none transition focus:border-[#70161E]" placeholder="Tell us your ideal retreat" />
              </label>
              <button className="inline-flex w-full items-center justify-center rounded-md bg-[#70161E] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FEFAE0] transition duration-300 hover:opacity-90">
                Send inquiry
              </button>
            </form>
          </div>
        </section>

        <section className="mt-16 rounded-[28px] bg-white px-8 py-10 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
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

        <section className="mt-16 rounded-[32px] bg-[#f5ecdf] px-8 py-10 shadow-[0_10px_40px_rgba(17,24,39,0.05)]">
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

        <footer className="mt-16 rounded-[0_0_28px_28px] bg-[#12263f] px-8 py-8 text-[#FEFAE0] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#d9d1c2]/80">Orchard House Retreat</p>
              <p className="text-sm text-[#d9d1c2]/70">© 2026 Orchard House. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-[#d9d1c2]/80">
              <span>Instagram</span>
              <span className="h-4 w-px bg-[#d9d1c2]/30" />
              <span>Dribbble</span>
              <span className="h-4 w-px bg-[#d9d1c2]/30" />
              <span>Contact</span>
            </div>
          </div>
        </footer>
          </div>
        </div>
      </div>
    </main>
  )
}
