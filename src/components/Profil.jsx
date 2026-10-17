export default function Profil() {
  return (
    <section className="py-20 bg-surface" id="profil">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-label-sm font-label-sm text-secondary uppercase tracking-widest font-bold">Tentang Al-Hikmah</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mt-2">
            Harmoni Pengetahuan Salaf &amp; Eksplorasi Sains Modern
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-4">
            Berdiri sejak tahun 1996 di atas tanah wakaf seluas 18 hektar, Pesantren Modern Al-Hikmah berkomitmen mengawal pembentukan karakter pemimpin yang
            alim, tangguh, dan berdaya saing global.
          </p>
        </div>

        {/* Sambutan Kyai & Visi Misi Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card Sambutan Pengasuh */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    alt="Potret KH. Muhammad Ridwan, Pengasuh Pesantren Modern Al-Hikmah"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ZxpBs4VV7cPdgZbm0YMTfumPq6-WfBZGU2Ge93Y8alW075K344EbyvasooouwS00QJCcM3_KiPeoM4XMQWBj9TGVQ66FtbdTXoOJPXJWipZwN7kHc-LAQSGHCLO_5vqX_cQO8rLfXstKlNNWnUVvygvZyvFQs57MqIw6Z0G_uTB5K2MxlEDhEsFfVfxNgTTgJ48_cu5EqHnpZhvAoU2EImc1jZIoUJQ4l9NX69ugEoDinI-kIbwVyA"
                  />
                </div>
                <div>
                  <h3 className="text-title-lg font-title-lg font-bold text-primary">KH. Muhammad Ridwan, Lc., M.A.</h3>
                  <p className="text-body-sm font-body-sm text-outline">Pengasuh &amp; Direktur Utama Pesantren Modern Al-Hikmah</p>
                </div>
              </div>
              <blockquote className="text-quote-sacred font-quote-sacred text-primary/90 italic leading-relaxed mb-6">
                &quot;Pendidikan di Al-Hikmah tidak semata mentransfer keilmuan akademis, melainkan menanamkan adab di atas ilmu pengetahuan. Kami mendidik
                santri agar tatkala mereka menjadi dokter, insinyur, maupun menteri, jiwanya senantiasa sujud dan hatinya bergetar oleh cahaya
                Al-Qur&apos;an.&quot;
              </blockquote>
            </div>
            <div className="pt-6 border-t border-outline-variant flex items-center justify-between">
              <div>
                <p className="text-label-sm font-label-sm text-outline">Tanda Tangan Khidmat,</p>
                <p className="font-headline-md text-primary font-bold tracking-tight">K.H. M. Ridwan</p>
              </div>
              <span className="material-symbols-outlined text-[44px] text-secondary/30">verified_user</span>
            </div>
          </div>

          {/* Visi & Misi Card */}
          <div className="lg:col-span-5 bg-primary-container text-on-primary rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 rounded-lg bg-primary text-secondary-fixed mb-4">
                <span className="material-symbols-outlined text-[28px]">lightbulb</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-primary mb-3">Visi Luhur Kami</h3>
              <p className="text-body-md font-body-md text-on-primary-container mb-6 leading-relaxed">
                Menjadi episentrum peradaban Islam terdepan di Asia Tenggara yang melahirkan ulama saintis dan teknokrat Qur'ani bertaraf internasional pada
                tahun 2035.
              </p>
              <h4 className="text-title-md font-title-md text-secondary-fixed mb-2 font-bold">Misi Utama:</h4>
              <ul className="space-y-2.5 text-body-sm font-body-sm text-on-primary-container">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed mt-0.5">check_circle</span>
                  <span>Menyelenggarakan pembelajaran Turats (Kitab Kuning) secara otentik bersanad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed mt-0.5">check_circle</span>
                  <span>Mengembangkan kultur riset sains dan teknologi terkini berbasis adab Islam.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed mt-0.5">check_circle</span>
                  <span>Membentuk lingkungan asrama mandiri dengan pembiasaan bahasa Arab &amp; Inggris harian.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Tiga Pilar Kurikulum Terpadu */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary transition-all">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[28px]">school</span>
            </div>
            <h4 className="text-title-lg font-title-lg font-bold text-primary mb-2">1. Kurikulum Nasional</h4>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Kurikulum Merdeka (Kemendikbudristek &amp; Kemenag) diperkaya dengan penguatan Sains Terapan, Matematika Kompetitif, dan persiapan UTBK-SNBT.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary transition-all">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[28px]">translate</span>
            </div>
            <h4 className="text-title-lg font-title-lg font-bold text-primary mb-2">2. Bahasa Internasional 24 Jam</h4>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Penerapan disiplin bahasa Arab fusha dan bahasa Inggris aktif melalui sistem zonasi lingkungan (Bilingual Eco-Living Campus).
            </p>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary transition-all">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[28px]">menu_book</span>
            </div>
            <h4 className="text-title-lg font-title-lg font-bold text-primary mb-2">3. Dirasah Islamiyah &amp; Turats</h4>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Kajian kitab kuning standar pesantren salafiah (Fathul Qorib, Bulughul Maram, Jurumiyah) dikombinasikan dengan metode Tahfidz Al-Qur'an
              terstruktur.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
