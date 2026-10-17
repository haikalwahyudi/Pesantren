const PRESTASI = [
  {
    icon: 'trophy',
    tag: 'Tingkat Nasional 2024',
    title: 'Juara 1 Debat Bahasa Arab Nasional',
    desc: 'Diraih oleh Tim Santri MA Al-Hikmah pada Festival Bahasa Arab Universitas Indonesia, mengungguli 45 sekolah unggulan se-Indonesia.',
  },
  {
    icon: 'military_tech',
    tag: 'OSN Sains 2024',
    title: 'Medali Emas Olimpiade Sains Nasional Fisika',
    desc: 'Ananda M. Fatih Baihaqi berhasil meraih medali emas bidang Fisika Terapan dan berhak melaju ke International Physics Olympiad (IPhO).',
  },
  {
    icon: 'public',
    tag: 'Kiprah Global Alumni',
    title: 'Diterima di Univ. Al-Azhar Kairo & FK UI',
    desc: 'Sebanyak 38 alumni angkatan 2024 diterima beasiswa penuh di Univ. Al-Azhar Mesir dan fakultas kedokteran berbagai perguruan tinggi negeri top.',
  },
]

export default function Prestasi() {
  return (
    <section className="py-20 bg-surface" id="prestasi">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-label-sm font-label-sm text-secondary uppercase tracking-widest font-bold">Bukti Kualitas Nyata</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mt-2">Prestasi Gemilang Santri Al-Hikmah</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-4">
            Santri kami membuktikan bahwa ketekunan mengkaji ilmu agama sejalan dengan kejayaan di kancah olimpiade sains nasional dan internasional.
          </p>
        </div>

        {/* Kartu Showcase Prestasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PRESTASI.map((prestasi) => (
            <div key={prestasi.title} className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-sm hover:border-secondary transition-all">
              <span className="material-symbols-outlined text-[36px] text-secondary mb-3">{prestasi.icon}</span>
              <span className="inline-block px-2.5 py-1 rounded bg-secondary-fixed/40 text-secondary text-label-sm font-label-sm font-bold mb-2">{prestasi.tag}</span>
              <h3 className="text-title-lg font-title-lg text-primary font-bold">{prestasi.title}</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">{prestasi.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimoni Wali Santri & Alumni */}
        <h3 className="text-headline-sm font-headline-sm text-primary text-center mb-8">Apa Kata Wali Santri &amp; Alumni?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant">
            <div className="flex items-center gap-1 text-secondary mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
            <p className="text-body-md font-body-md text-on-surface italic leading-relaxed mb-6">
              &quot;Kekhawatiran kami menitipkan anak di pesantren hilang seketika saat melihat perkembangan ananda. Selain hafalan Al-Qur&apos;an bertambah 7
              juz dalam setahun, kemampuan bahasa Inggris dan adab santunnya kepada orang tua luar biasa matang.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold shrink-0">DR</div>
              <div>
                <h4 className="text-title-md font-title-md font-bold text-primary">Dr. Ir. Hendra Saputra, M.T.</h4>
                <p className="text-body-sm font-body-sm text-outline">Wali Santri Kelas XI MA Sains - Dosen ITB</p>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant">
            <div className="flex items-center gap-1 text-secondary mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
            <p className="text-body-md font-body-md text-on-surface italic leading-relaxed mb-6">
              &quot;Pesantren Al-Hikmah mengajarkan disiplin bangun sebelum fajar, ketelitian memahami gramatika Arab, dan keberanian berpikir kritis. Berkat
              bekal tersebut, saya mampu menyelesaikan studi kedokteran umum dengan predikat cumlaude.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary text-on-primary flex items-center justify-center font-bold shrink-0">FA</div>
              <div>
                <h4 className="text-title-md font-title-md font-bold text-primary">dr. Farhan Al-Ghifari</h4>
                <p className="text-body-sm font-body-sm text-outline">Alumni Angkatan 2018 - Dokter Residen RSUP Fatmawati</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
