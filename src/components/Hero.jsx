export default function Hero({ onOpenVideo }) {
  return (
    <section className="relative overflow-hidden bg-surface-container-lowest py-16 lg:py-24 border-b border-outline-variant/40" id="beranda">
      <div className="absolute inset-0 arabesque-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed/50 text-secondary border border-secondary-fixed w-fit">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-label-sm font-label-sm tracking-wider uppercase">Pondok Pesantren Berakreditasi A Unggul</span>
            </div>
            <h1 className="text-display-hero-mobile lg:text-display-hero font-display-hero text-primary tracking-tight">
              Mencetak Generasi <span className="text-secondary italic">Qur'ani</span>, Berakhlak Mulia, &amp; Unggul dalam Sains Teknologi
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Integrasi menyeluruh antara kedalaman spiritual adab salafush shalih, kurikulum sains riset berstandar internasional, serta penguasaan aktif
              dwibahasa (Arab &amp; Inggris) 24 jam di lingkungan ma’had asri.
            </p>

            {/* Dual CTA Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                href="#/daftar"
              >
                <span>Daftar PPDB Sekarang</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <button
                className="px-6 py-3.5 rounded-lg border-2 border-primary text-primary font-label-lg text-label-lg hover:bg-primary-container/10 transition-all flex items-center gap-2"
                onClick={onOpenVideo}
              >
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_circle
                </span>
                <span>Tonton Video Profil</span>
              </button>
            </div>

            {/* Mini Jadwal Sholat & Waktu Belajar Santri Widget */}
            <div className="mt-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <span className="text-label-sm font-label-sm text-outline block">Jadwal Ibadah &amp; Halaqah Hari Ini</span>
                  <p className="text-title-md font-title-md text-primary font-bold">Waktu Ashar Berjamaah: 15:18 WIB</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary-container animate-ping"></span>
                <span className="text-body-sm font-body-sm font-medium text-secondary">Halaqah Sore Segera Dimulai</span>
              </div>
            </div>
          </div>

          {/* Hero Image & Interactive Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-outline-variant shadow-xl aspect-[4/5] bg-surface-container">
              <img
                className="w-full h-full object-cover"
                alt="Santri Pesantren Modern Al-Hikmah mengkaji robotika dan naskah klasik Arab di perpustakaan modern"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaa7VjsM-BccVBRWITg1tbXdxaoieOH51V970nWUkii48f7qGvhQSztdvAiQKDXgQyUMxil9LthiKVQqvYlM3EuZq0ZfmDn83KmrYCHDA8a31Tlb-1FXCBdxUnMGOuI_gnfNgqB9GbE1sZKmXp9pMcOQqVbKQTjT_xqYNrbH2AmuW5HkvkJHpDaGSd9xa_GcGMZWI8bwipkNPlWA1iZahBkYjvRJxei5ga3YdxBJZsUFze2C_rgtpBLg"
              />
              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-label-sm font-label-sm text-secondary font-bold">AKREDITASI INSTITUSI</p>
                  <p className="text-title-md font-title-md text-primary font-bold">Badan Akreditasi Nasional (BAN-P/M)</p>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Predikat &quot;A&quot; Unggul (Nilai 98)</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    workspace_premium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Statistik Prestasi */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-primary text-on-primary shadow-xl">
          <div className="text-center md:border-r border-primary-container/80 last:border-none p-2">
            <p className="text-display-hero-mobile font-display-hero text-secondary-fixed">1.450+</p>
            <p className="text-body-md font-body-md text-on-primary-container mt-1">Santri Aktif Mukim</p>
          </div>
          <div className="text-center md:border-r border-primary-container/80 last:border-none p-2">
            <p className="text-display-hero-mobile font-display-hero text-secondary-fixed">100%</p>
            <p className="text-body-md font-body-md text-on-primary-container mt-1">Kelulusan PTN &amp; Luar Negeri</p>
          </div>
          <div className="text-center md:border-r border-primary-container/80 last:border-none p-2">
            <p className="text-display-hero-mobile font-display-hero text-secondary-fixed">30 Juz</p>
            <p className="text-body-md font-body-md text-on-primary-container mt-1">Tahfidz Sanad Muttashil</p>
          </div>
          <div className="text-center p-2">
            <p className="text-display-hero-mobile font-display-hero text-secondary-fixed">48</p>
            <p className="text-body-md font-body-md text-on-primary-container mt-1">Asatidz Bergelar Master &amp; Doktor</p>
          </div>
        </div>

      </div>
    </section>
  )
}
