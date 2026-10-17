const JENJANG = [
  {
    tag: 'Jenjang Menengah Pertama',
    title: 'MTs / SMP Islam Terpadu',
    desc: 'Pondasi dasar pembentukan akhlak, penguatan tahsin tartil Al-Qur\u2019an, dan logika sains komputasional.',
    highlights: ['Target Tahfidz: Minimal 10 Juz Mutqin', 'Dasar Logika Algoritma & Coding Pemula', 'Muhadatsah Harian Arab & Inggris'],
    linkLabel: 'Rincian Kurikulum MTs',
    featured: false,
  },
  {
    tag: 'Jenjang Menengah Atas',
    title: 'MA / SMA Unggulan Riset',
    desc: 'Fokus inkubasi olimpiade sains (OSN), persiapan tembus perguruan tinggi negeri terbaik, dan studi luar negeri.',
    highlights: ['Target Tahfidz: Hingga 30 Juz Bersanad', 'Klinik Olimpiade & STEM Research Lab', 'Bimbingan Tes Luar Negeri (TOEFL & TOAFL)'],
    linkLabel: 'Rincian Kurikulum MA',
    featured: true,
  },
  {
    tag: 'Pendidikan Tinggi Pesantren',
    title: "Ma'had Aly Takhassus",
    desc: 'Kajian mendalam spesialisasi Fiqh & Ushul Fiqh kontemporer serta pengkaderan Mufti muda berintelektual luas.',
    highlights: ['Kajian Kitab Kuning Lanjutan (Kibarut Turats)', 'Bahtsul Masail Maslahat Kontemporer', 'Ijazah Sanad Kutubus Sittah'],
    linkLabel: "Rincian Ma'had Aly",
    featured: false,
  },
]

const EKSKUL = [
  { icon: 'military_tech', label: 'Pramuka Santri' },
  { icon: 'sports_martial_arts', label: 'Pencak Silat' },
  { icon: 'record_voice_over', label: 'Muhadharah 3 Bahasa' },
  { icon: 'brush', label: 'Kaligrafi Islam' },
  { icon: 'smart_toy', label: 'Robotika Santri' },
  { icon: 'video_camera_front', label: 'Multimedia & Pers' },
]

export default function Kurikulum() {
  return (
    <section className="py-20 bg-surface-container-lowest border-y border-outline-variant/50" id="kurikulum">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-label-sm font-label-sm text-secondary uppercase tracking-widest font-bold">Pilihan Jenjang</span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mt-1">
              Jenjang Pendidikan Formal &amp; Takhassus
            </h2>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-md mt-4 md:mt-0">
            Setiap jenjang didesain dengan target kompetensi yang terukur baik dalam aspek kognitif, spiritual, maupun kemandirian santri.
          </p>
        </div>

        {/* Kartu Jenjang Pendidikan 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {JENJANG.map((jenjang) => (
            <div
              key={jenjang.title}
              className={`rounded-2xl bg-surface overflow-hidden flex flex-col justify-between relative transition-all ${
                jenjang.featured ? 'border-2 border-secondary shadow-md' : 'border border-outline-variant hover:shadow-lg'
              }`}
            >
              {jenjang.featured && (
                <div className="absolute top-0 right-0 bg-secondary text-on-primary text-label-sm font-label-sm px-4 py-1 rounded-bl-lg font-bold z-10">
                  PROGRAM FAVORIT
                </div>
              )}
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-label-sm font-label-sm font-bold mb-3 ${
                    jenjang.featured ? 'bg-secondary/15 text-secondary' : 'bg-primary/10 text-primary'
                  }`}
                >
                  {jenjang.tag}
                </span>
                <h3 className="text-headline-sm font-headline-sm text-primary mb-2">{jenjang.title}</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">{jenjang.desc}</p>
                <div className="space-y-3 border-t border-outline-variant pt-4">
                  {jenjang.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-surface-container-low border-t border-outline-variant/60">
                <a className="text-primary font-label-lg text-label-lg flex items-center justify-between hover:text-secondary transition-colors" href="#ppdb">
                  <span>{jenjang.linkLabel}</span>
                  <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Program Ekstrakurikuler & Skill Mandiri */}
        <div className="bg-surface p-8 rounded-2xl border border-outline-variant">
          <h3 className="text-headline-sm font-headline-sm text-primary mb-6 text-center">Pengembangan Bakat &amp; Ekstrakurikuler Santri</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {EKSKUL.map((eks) => (
              <div key={eks.label} className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/60 text-center flex flex-col items-center">
                <span className="material-symbols-outlined text-[32px] text-primary mb-2">{eks.icon}</span>
                <span className="text-title-md font-title-md text-on-surface">{eks.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
