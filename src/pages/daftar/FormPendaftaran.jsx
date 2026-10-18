import { useState } from 'react'

const INPUT_CLS =
  'w-full px-4 py-3 rounded-lg border border-outline-variant text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all font-body-md text-body-md bg-white'

const LABEL_CLS = 'block font-label-lg text-label-lg text-on-surface mb-1.5'

const RADIO_CARD_CLS =
  'relative flex flex-col p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest cursor-pointer hover:border-primary-container transition-all has-[:checked]:border-primary-container has-[:checked]:bg-primary/5'

const JENJANG_LIST = [
  {
    value: 'mts',
    title: 'MTs Terpadu',
    tag: 'Tingkat SMP / Sederajat',
    desc: 'Pondasi adab, tahsin Al-Qur\u2019an, dan dasar sains modern terintegrasi.',
  },
  {
    value: 'ma',
    title: 'MA Riset',
    tag: 'Tingkat SMA Unggulan',
    desc: 'Kesiapan universitas top dunia, riset ilmiah, dan kitab kuning bertaraf.',
  },
  {
    value: 'mahad_aly',
    title: "Ma'had Aly",
    tag: 'Takhassus Pasca SMA',
    desc: 'Pendalaman Fiqh, Usul, dan Sanad Keilmuan Ulama Salaf-Khalaf.',
  },
]

function SectionHeading({ no, title, desc }) {
  return (
    <div className="flex items-center gap-3 pb-3 border-b border-surface-container-high mb-6">
      <span className="w-7 h-7 rounded-md bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">{no}</span>
      <div>
        <h2 className="font-title-lg text-title-lg text-primary font-bold">{title}</h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{desc}</p>
      </div>
    </div>
  )
}

export default function FormPendaftaran() {
  const [jenjang, setJenjang] = useState('mts')
  const [submitted, setSubmitted] = useState(false)
  const [registrasi, setRegistrasi] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const nomor = `PPDB-25-${Math.floor(100000 + Math.random() * 900000)}`
    setRegistrasi(nomor)
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  if (submitted) {
    return (
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6 sm:p-10 text-center">
        <span className="material-symbols-outlined text-[64px] text-primary-container">task_alt</span>
        <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-4 mb-2">Alhamdulillah, Pendaftaran Terkirim!</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mb-6">
          Data calon santri berhasil kami terima. Panitia PPDB akan menghubungi Anda melalui WhatsApp untuk verifikasi berkas dan informasi jadwal tes
          seleksi.
        </p>
        <div className="inline-block bg-surface border border-outline-variant rounded-lg px-6 py-4 mb-6">
          <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">Nomor Registrasi Anda</p>
          <p className="font-mono text-title-lg font-bold text-primary tracking-widest">{registrasi}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            className="inline-flex items-center gap-2 bg-primary-container text-white font-label-lg text-label-lg px-5 py-2.5 rounded-lg hover:bg-primary transition-all shadow-sm active:scale-95"
            href="https://wa.me/6281288997700?text=Halo%20Panitia%20PPDB,%20saya%20sudah%20mengirim%20formulir%20dengan%20nomor%20registrasi%20%5Bnomor%5D"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-sm">support_agent</span>
            <span>Konfirmasi via WhatsApp</span>
          </a>
          <button
            className="inline-flex items-center gap-2 text-primary border border-primary font-label-lg text-label-lg px-5 py-2.5 rounded-lg hover:bg-primary/5 transition-colors"
            onClick={() => setSubmitted(false)}
            type="button"
          >
            <span className="material-symbols-outlined text-sm">edit_square</span>
            <span>Isi Formulir Lagi</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6 sm:p-10">
      <form className="space-y-10" onSubmit={handleSubmit}>
        {/* Bagian 1: Data Diri Calon Santri */}
        <section>
          <SectionHeading desc="Lengkapi data pribadi sesuai dokumen kependudukan resmi" no="01" title="Data Diri Calon Santri" />
          <div className="space-y-5">
            {/* Nama Lengkap */}
            <div>
              <label className={LABEL_CLS} htmlFor="nama_lengkap">
                Nama Lengkap Santri <span className="text-error">*</span>
              </label>
              <input className={INPUT_CLS} id="nama_lengkap" placeholder="Contoh: Muhammad Rayhan Al-Fatih" required type="text" />
              <p className="mt-1 font-body-sm text-body-sm text-outline">Harus sama persis dengan Akta Kelahiran atau Kartu Keluarga</p>
            </div>

            {/* NISN & Gender Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={LABEL_CLS} htmlFor="nisn">
                  Nomor Induk Siswa Nasional (NISN) <span className="text-error">*</span>
                </label>
                <input className={INPUT_CLS} id="nisn" maxLength="10" placeholder="10 digit nomor NISN" required type="text" />
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-2">
                  Jenis Kelamin <span className="text-error">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="relative flex items-center justify-center p-3 rounded-lg border border-outline-variant bg-surface cursor-pointer hover:border-primary-container transition-all has-[:checked]:border-primary-container has-[:checked]:bg-primary/5 has-[:checked]:text-primary">
                    <input defaultChecked className="sr-only" name="gender" type="radio" value="laki-laki" />
                    <span className="font-label-lg text-label-lg font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">male</span>
                      Santriawan
                    </span>
                  </label>
                  <label className="relative flex items-center justify-center p-3 rounded-lg border border-outline-variant bg-surface cursor-pointer hover:border-primary-container transition-all has-[:checked]:border-primary-container has-[:checked]:bg-primary/5 has-[:checked]:text-primary">
                    <input className="sr-only" name="gender" type="radio" value="perempuan" />
                    <span className="font-label-lg text-label-lg font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">female</span>
                      Santriwati
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Tempat & Tanggal Lahir */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={LABEL_CLS} htmlFor="tempat_lahir">
                  Tempat Lahir <span className="text-error">*</span>
                </label>
                <input className={INPUT_CLS} id="tempat_lahir" placeholder="Kota kelahiran, misal: Bandung" required type="text" />
              </div>
              <div>
                <label className={LABEL_CLS} htmlFor="tanggal_lahir">
                  Tanggal Lahir <span className="text-error">*</span>
                </label>
                <input className={INPUT_CLS} id="tanggal_lahir" required type="date" />
              </div>
            </div>

            {/* Asal Sekolah */}
            <div>
              <label className={LABEL_CLS} htmlFor="asal_sekolah">
                Asal Sekolah / Madrasah Sebelumnya <span className="text-error">*</span>
              </label>
              <input className={INPUT_CLS} id="asal_sekolah" placeholder="Misal: SD IT Al-Madinah Bogor / MI Negeri 1 Jakarta" required type="text" />
            </div>
          </div>
        </section>

        {/* Bagian 2: Jenjang & Peminatan */}
        <section className="pt-4">
          <SectionHeading desc="Pilih jalur pendidikan yang disesuaikan dengan jenjang usia & target santri" no="02" title="Jenjang Pendidikan & Peminatan" />

          {/* Radio Cards: Pilihan Jenjang */}
          <div className="mb-6">
            <label className="block font-label-lg text-label-lg text-on-surface mb-3">
              Pilih Jenjang Pesantren <span className="text-error">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {JENJANG_LIST.map((item) => (
                <label className={RADIO_CARD_CLS} key={item.value}>
                  <input
                    checked={jenjang === item.value}
                    className="sr-only"
                    name="jenjang"
                    onChange={() => setJenjang(item.value)}
                    type="radio"
                    value={item.value}
                  />
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-lg text-label-lg font-bold text-primary">{item.title}</span>
                    <span
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        jenjang === item.value ? 'border-primary-container' : 'border-outline-variant'
                      }`}
                    >
                      {jenjang === item.value && <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>}
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">{item.tag}</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{item.desc}</p>
                </label>
              ))}
            </div>
          </div>

          {/* Peminatan Khusus */}
          <div>
            <label className={LABEL_CLS} htmlFor="peminatan">
              Peminatan Khusus Santri <span className="text-error">*</span>
            </label>
            <select className={INPUT_CLS} id="peminatan" required>
              <option value="tahfidz">Program Tahfidz Intensif 30 Juz &amp; Sanad</option>
              <option value="sains">Program Sains, Robotika &amp; Riset Eksakta</option>
              <option value="bahasa">Program Bahasa Internasional (Arab &amp; Inggris Aktif)</option>
              <option value="turats">Program Dirasah Islamiyah &amp; Penguasaan Turats</option>
            </select>
          </div>
        </section>

        {/* Bagian 3: Data Orang Tua / Wali */}
        <section className="pt-4">
          <SectionHeading desc="Informasi kontak utama untuk komunikasi proses seleksi dan pengumuman" no="03" title="Data Orang Tua / Wali" />
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={LABEL_CLS} htmlFor="nama_ayah">
                  Nama Ayah / Wali <span className="text-error">*</span>
                </label>
                <input className={INPUT_CLS} id="nama_ayah" placeholder="Nama lengkap ayah" required type="text" />
              </div>
              <div>
                <label className={LABEL_CLS} htmlFor="nama_ibu">
                  Nama Ibu Kandung <span className="text-error">*</span>
                </label>
                <input className={INPUT_CLS} id="nama_ibu" placeholder="Nama lengkap ibu" required type="text" />
              </div>
            </div>

            {/* Kontak WhatsApp */}
            <div>
              <label className={LABEL_CLS} htmlFor="whatsapp">
                Nomor WhatsApp Aktif <span className="text-error">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                  <span className="font-label-lg text-label-lg font-bold">+62</span>
                </div>
                <input className={`${INPUT_CLS} pl-14`} id="whatsapp" placeholder="812-xxxx-xxxx" required type="tel" />
              </div>
              <p className="mt-1 font-body-sm text-body-sm text-outline">
                Pemberitahuan nomor ujian &amp; jadwal wawancara santri akan dikirimkan ke nomor ini
              </p>
            </div>

            {/* Alamat Domisili */}
            <div>
              <label className={LABEL_CLS} htmlFor="alamat">
                Alamat Lengkap Domisili / Kota Asal <span className="text-error">*</span>
              </label>
              <textarea
                className={`${INPUT_CLS} resize-none`}
                id="alamat"
                placeholder="Nama jalan, nomor rumah, RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten, dan Provinsi"
                required
                rows="3"
              ></textarea>
            </div>
          </div>
        </section>

        {/* Bagian 4: Pernyataan & Tombol Kirim */}
        <section className="pt-6 border-t border-surface-container-high">
          <div className="bg-surface rounded-lg p-4 border border-outline-variant/60 mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                className="mt-1 w-5 h-5 rounded border-outline-variant accent-primary-container focus:ring-primary-container/20"
                required
                type="checkbox"
              />
              <span className="font-body-md text-body-md text-on-surface">
                Saya menyatakan bahwa data yang diisi adalah benar dan siap mengikuti ketentuan seleksi PPDB Pesantren Modern Al-Hikmah dengan penuh
                kesungguhan.
              </span>
            </label>
          </div>

          {/* Tombol CTA Utama */}
          <button
            className="w-full py-4 px-6 rounded-lg bg-primary-container hover:bg-primary text-white font-label-lg text-title-md font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group active:scale-[0.99]"
            type="submit"
          >
            <span>Kirim Formulir Pendaftaran</span>
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>

          {/* Bantuan Panitia */}
          <div className="mt-5 text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant flex flex-wrap items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-base text-secondary">support_agent</span>
              <span>Butuh bantuan saat mengisi formulir? Hubungi Panitia via WhatsApp di </span>
              <a
                className="font-semibold text-primary underline hover:text-primary-container"
                href="https://wa.me/6281288997700"
                rel="noopener noreferrer"
                target="_blank"
              >
                0812-8899-7700
              </a>
            </p>
          </div>
        </section>




      </form>
    </div>
  )
}
