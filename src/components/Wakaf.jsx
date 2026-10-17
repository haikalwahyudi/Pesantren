export default function Wakaf() {
  const handleCopyRekening = async () => {
    try {
      await navigator.clipboard.writeText('7129998811')
      alert('Nomor rekening BSI berhasil disalin!')
    } catch {
      alert('Gagal menyalin otomatis. Silakan salin manual nomor: 7129998811')
    }
  }

  return (
    <section className="py-20 bg-primary text-on-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="inline-block px-3 py-1 rounded-full text-label-sm font-label-sm bg-secondary text-on-primary font-bold mb-3">
              INVESTASI AKHIRAT ABADI
            </span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-secondary-fixed">
              Wakaf Pembangunan Gedung Asrama Penghafal Al-Qur&apos;an
            </h2>
            <p className="text-body-lg font-body-lg text-on-primary-container mt-4 leading-relaxed">
              Setiap rupiah yang Anda wakafkan akan mengalirkan pahala jariyah tiada putus dari setiap lantunan ayat suci dan dzikir ribuan santri penghafal
              Al-Qur&apos;an sepanjang masa.
            </p>
            <div className="mt-8 space-y-4">
              <div>
                <div className="flex justify-between text-body-sm font-body-sm mb-1 text-on-primary-container">
                  <span>
                    Dana Terhimpun: <strong>Rp 3.420.000.000</strong>
                  </span>
                  <span>
                    Target: <strong>Rp 5.000.000.000</strong>
                  </span>
                </div>
                <div className="w-full bg-primary-container rounded-full h-3">
                  <div className="bg-secondary h-3 rounded-full" style={{ width: '68%' }}></div>
                </div>
                <span className="text-label-sm font-label-sm text-secondary-fixed mt-1 block">Tercapai 68.4% dari total kebutuhan konstruksi lantai 3 &amp; 4</span>
              </div>
            </div>
          </div>

          {/* Card Transfer Rekening & QRIS */}
          <div className="lg:col-span-6 bg-surface text-on-surface rounded-2xl p-8 border border-outline-variant shadow-2xl">
            <h3 className="text-headline-sm font-headline-sm text-primary mb-4">Saluran Rekening Wakaf Resmi</h3>
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-bold text-label-sm shrink-0">BSI</div>
                <div>
                  <span className="text-label-sm font-label-sm text-outline block">Bank Syariah Indonesia (BSI)</span>
                  <span className="text-title-lg font-title-lg font-bold text-primary tracking-wider">712 999 8811</span>
                  <span className="text-body-sm font-body-sm text-on-surface block">a.n. Yayasan Pesantren Al-Hikmah Wakaf</span>
                </div>
              </div>
              <button className="p-2 text-primary hover:text-secondary" onClick={handleCopyRekening} title="Salin Nomor Rekening">
                <span className="material-symbols-outlined">content_copy</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              <div className="w-32 h-32 shrink-0 rounded-lg border-2 border-dashed border-outline-variant p-2 flex flex-col items-center justify-center bg-surface-container-lowest">
                <span className="material-symbols-outlined text-[48px] text-primary">qr_code_2</span>
                <span className="text-label-sm font-label-sm text-outline mt-1 font-bold">QRIS NASIONAL</span>
              </div>
              <div>
                <h4 className="text-title-md font-title-md font-bold text-primary">Konfirmasi Donasi Cepat</h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 mb-3">
                  Kirimkan bukti transfer wakaf Anda ke Call Center Baitul Mal Al-Hikmah untuk penerbitan Sertifikat Ikrar Wakaf Resmi.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg hover:text-secondary"
                  href="https://wa.me/6281288997700?text=Konfirmasi%20Wakaf%20Al-Hikmah"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Hubungi Admin Wakaf</span>
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
