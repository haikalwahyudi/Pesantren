const FOOTER_LINKS = [
  'Kebijakan Privasi',
  'Syarat & Ketentuan PPDB',
  'Alur Pendaftaran',
  'Pusat Bantuan & Kontak',
  'Wakaf Pembangunan',
]

export default function PpdbFooter() {
  return (
    <footer className="bg-primary text-on-primary border-t border-primary-container mt-16">
      <div className="w-full px-6 lg:px-12 py-12 max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-primary-container/60">
          <div>
            <span className="text-headline-sm font-headline-md font-bold text-on-primary tracking-tight">Pesantren Modern Al-Hikmah</span>
            <p className="font-body-md text-body-md text-surface-container-highest mt-1">
              Membina Generasi Qur&apos;ani, Berakhlak Mulia, dan Berdaya Saing Global.
            </p>
          </div>
          {/* Contact Micro Links */}
          <div className="flex items-center gap-4 text-surface-container-highest font-body-sm text-body-sm">
            <a className="flex items-center gap-1 hover:text-secondary-fixed transition-colors" href="tel:+622178901234">
              <span className="material-symbols-outlined text-sm">call</span>
              <span>(021) 7890-1234</span>
            </a>
            <a className="flex items-center gap-1 hover:text-secondary-fixed transition-colors" href="mailto:ppdb@alhikmah.sch.id">
              <span className="material-symbols-outlined text-sm">mail</span>
              <span>ppdb@alhikmah.sch.id</span>
            </a>
          </div>
        </div>
        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-label-sm text-label-sm">
          <div className="flex flex-wrap gap-6 text-surface-container-highest">
            {FOOTER_LINKS.map((label) => (
              <a className="hover:text-secondary-fixed transition-colors duration-200 hover:underline" href="#" key={label}>
                {label}
              </a>
            ))}
          </div>
          <p className="font-body-sm text-body-sm text-surface-container-highest/80">
            © 2024 Pesantren Modern Al-Hikmah. Seluruh Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
