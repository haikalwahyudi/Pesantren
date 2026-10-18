const BERKAS_LIST = [
  'Fotokopi Kartu Keluarga (KK) & Akta Kelahiran',
  'Fotokopi Rapor 2 semester terakhir',
  'Pasfoto santri ukuran 3x4 berwarna (4 lembar)',
  'Surat keterangan sehat & bebas narkoba dari dokter',
]

export default function SidebarDaftar() {
  const handleCopyRekening = async () => {
    try {
      await navigator.clipboard.writeText('7128899001')
      alert('Nomor rekening BSI berhasil disalin!')
    } catch {
      alert('Gagal menyalin otomatis. Silakan salin manual nomor: 712 8899 001')
    }
  }

  return (
    <aside className="lg:col-span-4 space-y-6">
      {/* Biaya & Rekening Card */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm">
        <div className="flex items-center gap-2 text-secondary mb-3">
          <span className="material-symbols-outlined text-xl">payments</span>
          <span className="font-label-lg text-label-lg uppercase tracking-wider">Infaq Pendaftaran</span>
        </div>
        <div className="mb-4">
          <div className="text-3xl font-headline-md font-bold text-primary">Rp 450.000</div>
          <p className="font-body-sm text-body-sm text-outline mt-1">Biaya administrasi, psikotes, dan map berkas pendaftaran.</p>
        </div>
        <div className="p-3.5 bg-surface rounded-lg border border-outline-variant/60 space-y-1 flex items-start justify-between gap-2">
          <div className="space-y-1">
            <div className="font-label-sm text-label-sm text-outline uppercase">Bank Syariah Indonesia (BSI)</div>
            <div className="font-mono text-title-md font-bold text-on-surface tracking-wider">712 8899 001</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">a.n. PPDB Pesantren Modern Al-Hikmah</div>
          </div>
          <button
            className="p-2 text-primary hover:text-secondary transition-colors shrink-0"
            onClick={handleCopyRekening}
            title="Salin Nomor Rekening"
            type="button"
          >
            <span className="material-symbols-outlined text-xl">content_copy</span>
          </button>
        </div>
      </div>

      {/* Berkas yang Perlu Disiapkan */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm">
        <div className="flex items-center gap-2 text-primary mb-4">
          <span className="material-symbols-outlined text-xl">folder_check</span>
          <h3 className="font-title-lg text-title-lg font-bold">Berkas Verifikasi</h3>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
          Diserahkan saat pelaksanaan tes observasi &amp; wawancara tatap muka:
        </p>
        <ul className="space-y-3 font-body-sm text-body-sm text-on-surface">
          {BERKAS_LIST.map((berkas) => (
            <li className="flex items-start gap-2.5" key={berkas}>
              <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
              <span>{berkas}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Kutipan / Motivasi Spiritual */}
      <div className="bg-primary-container text-white rounded-xl p-6 shadow-sm relative overflow-hidden">
        <div aria-hidden="true" className="absolute -right-4 -bottom-4 opacity-10">
          <span className="material-symbols-outlined text-9xl">auto_stories</span>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-1.5 text-secondary-fixed mb-2 font-label-sm text-label-sm tracking-wide uppercase">
            <span className="material-symbols-outlined text-sm">menu_book</span>
            <span>Pesan Keberkahan</span>
          </div>
          <p className="font-quote-sacred text-quote-sacred italic leading-relaxed text-surface-container-high mb-3">
            &quot;Menuntut ilmu adalah jalan lapang menuju ridho Ilahi dan investasi terindah bagi masa depan keluarga.&quot;
          </p>
          <span className="font-label-sm text-label-sm text-secondary-fixed/80">Khadim Ma&apos;had Al-Hikmah</span>
        </div>
      </div>
    </aside>
  )
}
