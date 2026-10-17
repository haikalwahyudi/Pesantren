const LANGKAH = [
  { no: 1, title: 'Akun Online', desc: 'Membuat akun wali santri di portal resmi dan verifikasi email/WhatsApp.' },
  { no: 2, title: 'Biaya Tes', desc: 'Membayar biaya registrasi seleksi via Virtual Account (BSI / Mandiri).' },
  { no: 3, title: 'Unggah Berkas', desc: 'Mengisi biodata, rapor 3 semester terakhir, KK, dan surat sehat.' },
  { no: 4, title: 'Ujian & Wawancara', desc: 'Tes akademik, baca Al-Qur\u2019an, psikotes, dan wawancara kesiapan orang tua.' },
  { no: 5, title: 'Daftar Ulang', desc: 'Pengumuman kelulusan online, penyelesaian administrasi, & fitting seragam.' },
]

const DOKUMEN = [
  'Fotokopi/Scan Kartu Keluarga & KTP Orang Tua',
  'Akta Kelahiran Calon Santri',
  'Surat Keterangan NISN dari Sekolah Asal',
  'Rapor 3 Semester Terakhir',
  'Surat Keterangan Sehat & Bebas Narkoba',
  'Pas Foto Formal Berlatar Belakang Merah',
]

const JENJANG_OPTION = ['MTs / SMP Islam Terpadu', 'MA / SMA Unggulan Sains & Riset', "Ma'had Aly Takhassus"]

export default function PPDB() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(
      'Alhamdulillah! Data awal formulir Anda telah tercatat. Panitia PPDB akan mengirimkan akses portal ujian ke nomor WhatsApp Anda.',
    )
  }

  return (
    <section className="py-20 bg-surface-container-low border-b border-outline-variant/60" id="ppdb">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-on-primary text-label-sm font-label-sm font-bold mb-3">
            SISTEM INFORMASI PPDB ONLINE
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary">Alur Pendaftaran Peserta Didik Baru TA 2025/2026</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-3">
            Proses seleksi transparan, objektif, dan dapat diakses dari seluruh nusantara serta mancanegara.
          </p>
        </div>

        {/* 5 Langkah Infografis Alur Pendaftaran */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-16">
          {LANGKAH.map((langkah) => (
            <div key={langkah.no} className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant relative">
              <span
                className={`w-8 h-8 ${langkah.no === 5 ? 'bg-secondary' : 'bg-primary'} text-on-primary font-bold flex items-center justify-center text-label-lg mb-3`}
              >
                {langkah.no}
              </span>
              <h4 className="text-title-md font-title-md text-primary font-bold mb-1">{langkah.title}</h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">{langkah.desc}</p>
            </div>
          ))}
        </div>

        {/* Tabel Transparansi Biaya & Syarat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Rincian Biaya */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant">
              <div>
                <h3 className="text-headline-sm font-headline-sm text-primary">Tabel Estimasi Investasi Pendidikan</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Transparan, tanpa pungutan liar, mencakup seluruh kebutuhan asrama</p>
              </div>
              <span className="material-symbols-outlined text-secondary text-[32px]">payments</span>
            </div>
            <div className="divide-y divide-outline-variant/60">
              <div className="py-3 flex justify-between items-center text-body-md font-body-md">
                <span className="text-on-surface">Biaya Pendaftaran &amp; Tes Seleksi</span>
                <span className="font-bold text-primary">Rp 450.000</span>
              </div>
              <div className="py-3 flex justify-between items-center text-body-md font-body-md">
                <div>
                  <span className="text-on-surface block font-medium">Infaq Pengembangan &amp; Sarana (Sekali di Awal)</span>
                  <span className="text-label-sm font-label-sm text-outline">Dapat diangsur 2x selama semester pertama</span>
                </div>
                <span className="font-bold text-primary">Rp 18.500.000</span>
              </div>
              <div className="py-3 flex justify-between items-center text-body-md font-body-md">
                <div>
                  <span className="text-on-surface block font-medium">SPP Bulanan Terpadu (All In)</span>
                  <span className="text-label-sm font-label-sm text-outline">Asrama ber-AC, Makan bergizi 3x sehari, Laundry, &amp; KBM</span>
                </div>
                <span className="font-bold text-secondary">Rp 2.150.000 / bln</span>
              </div>
              <div className="py-3 flex justify-between items-center text-body-md font-body-md">
                <span className="text-on-surface">Paket Seragam Lengkap (5 Stel) &amp; Buku Turats</span>
                <span className="font-bold text-primary">Rp 2.300.000</span>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-surface-container-low border border-outline-variant text-body-sm font-body-sm text-outline">
              *Tersedia beasiswa penuh (tahfidz 30 juz mutqin &amp; beasiswa prestasi sains nasional). Hubungi sekretariat untuk verifikasi portofolio.
            </div>
          </div>

          {/* Dokumen Persyaratan */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant">
            <h3 className="text-headline-sm font-headline-sm text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">folder_open</span>
              <span>Dokumen Persyaratan</span>
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">Disiapkan dalam bentuk scan asli (PDF/JPG maksimal 2MB per file):</p>
            <ul className="space-y-3.5 text-body-md font-body-md text-on-surface">
              {DOKUMEN.map((dokumen) => (
                <li key={dokumen} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_box</span>
                  <span>{dokumen}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-outline-variant">
              <a
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-primary text-primary font-label-lg text-label-lg hover:bg-primary-container/10 transition-colors"
                href="#ppdb"
              >
                <span className="material-symbols-outlined text-[20px]">description</span>
                <span>Unduh E-Book Panduan PPDB 2025 (PDF)</span>
              </a>
            </div>
          </div>
        </div>


        {/* FORM SIMULASI / PENDAFTARAN LANGSUNG INTERAKTIF */}
        <div className="bg-surface-container-lowest rounded-2xl p-8 lg:p-12 border-2 border-primary/20 shadow-md" id="ppdb-form">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-label-sm font-label-sm text-secondary font-bold uppercase">Formulir Cepat</span>
            <h3 className="text-headline-md font-headline-md text-primary">Mulai Pendaftaran Calon Santri</h3>
            <p className="text-body-md font-body-md text-on-surface-variant mt-1">Lengkapi data awal berikut untuk mendapatkan nomor registrasi resmi panitia.</p>
          </div>
          <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-label-lg font-label-lg text-on-surface mb-2" htmlFor="nama-santri">
                Nama Lengkap Santri
              </label>
              <input
                className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 p-3 text-body-md font-body-md"
                id="nama-santri"
                placeholder="Contoh: Ahmad Rayhan Al-Fatih"
                required
                type="text"
              />
            </div>
            <div>
              <label className="block text-label-lg font-label-lg text-on-surface mb-2" htmlFor="nisn-santri">
                NISN Santri
              </label>
              <input
                className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 p-3 text-body-md font-body-md"
                id="nisn-santri"
                placeholder="10 Digit Nomor Induk Santri Nasional"
                required
                type="text"
              />
            </div>
            <div>
              <label className="block text-label-lg font-label-lg text-on-surface mb-2" htmlFor="jenjang">
                Jenjang Pendidikan Dituju
              </label>
              <select
                className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 p-3 text-body-md font-body-md"
                id="jenjang"
              >
                {JENJANG_OPTION.map((opsi) => (
                  <option key={opsi}>{opsi}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-label-lg font-label-lg text-on-surface mb-2" htmlFor="wa-orang-tua">
                Nomor WhatsApp Aktif Orang Tua
              </label>
              <input
                className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 p-3 text-body-md font-body-md"
                id="wa-orang-tua"
                placeholder="08xxxxxxxxxx"
                required
                type="tel"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-label-lg font-label-lg text-on-surface mb-2" htmlFor="domisili">
                Kota / Kabupaten Asal Domisili
              </label>
              <input
                className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 p-3 text-body-md font-body-md"
                id="domisili"
                placeholder="Contoh: Jakarta Selatan, DKI Jakarta"
                required
                type="text"
              />
            </div>
            <div className="md:col-span-2 pt-2">
              <button
                className="w-full py-4 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-md transition-all flex items-center justify-center gap-2"
                type="submit"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Kirim Pendaftaran &amp; Dapatkan Nomor Registrasi</span>
              </button>
              <p className="text-center text-label-sm font-label-sm text-outline mt-3">Data Anda terenkripsi dengan aman sesuai kebijakan privasi Al-Hikmah.</p>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
