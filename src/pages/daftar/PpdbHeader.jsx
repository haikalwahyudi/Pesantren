const NAV_LINKS = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#profil', label: 'Profil' },
  { href: '#kurikulum', label: 'Kurikulum' },
  { href: '#fasilitas', label: 'Fasilitas' },
  { href: '#/daftar', label: 'PPDB', active: true },
  { href: '#prestasi', label: 'Prestasi' },
]

export default function PpdbHeader() {
  return (
    <header className="bg-surface sticky top-0 z-50 shadow-sm border-b border-outline-variant">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 max-w-7xl mx-auto h-20">
        {/* Brand Logo & Identity */}
        <a className="flex items-center gap-3 group" href="#/">
          <div className="w-10 h-10 rounded-lg bg-primary-container text-white flex items-center justify-center font-bold font-headline-md text-title-lg shadow-sm">
            <span>AH</span>
          </div>
          <div className="flex flex-col">
            <span className="text-title-lg font-headline-md font-bold text-primary tracking-tight">Pesantren Modern Al-Hikmah</span>
            <span className="font-label-sm text-label-sm text-outline tracking-wider">Islamic Boarding School &amp; Academy</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-label-lg text-label-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className={
                link.active
                  ? 'text-primary border-b-2 border-primary font-bold pb-1'
                  : 'text-on-surface-variant font-medium hover:text-primary transition-colors duration-200'
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Trailing Action Cluster */}
        <div className="flex items-center gap-4">
          <a
            className="hidden sm:inline-flex items-center gap-2 text-primary font-label-lg text-label-lg px-4 py-2 rounded-lg border border-primary hover:bg-primary/5 transition-colors"
            href="#ppdb"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            <span>Unduh Brosur</span>
          </a>
          <a
            className="inline-flex items-center gap-2 bg-primary-container text-white font-label-lg text-label-lg px-5 py-2.5 rounded-lg hover:bg-primary transition-all shadow-sm active:scale-95"
            href="https://wa.me/6281288997700?text=Halo%20Panitia%20PPDB%20Pesantren%20Modern%20Al-Hikmah,%20saya%20ingin%20berkonsultasi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            <span>Hubungi Panitia</span>
          </a>
        </div>
      </div>
    </header>
  )
}
