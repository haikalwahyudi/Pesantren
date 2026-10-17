import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'profil', label: 'Profil' },
  { id: 'kurikulum', label: 'Kurikulum' },
  { id: 'fasilitas', label: 'Fasilitas' },
  { id: 'ppdb', label: 'PPDB' },
  { id: 'prestasi', label: 'Prestasi' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const linkClass = (id) =>
    activeSection === id
      ? 'text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed font-bold pb-1 hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200'
      : 'text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200'

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <header className="sticky top-0 z-40 bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none backdrop-blur-md bg-opacity-95">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 max-w-7xl mx-auto h-20">
        {/* Brand Logo */}
        <a className="flex items-center gap-3" href="#beranda">
          <div className="w-11 h-11 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
          </div>
          <div>
            <span className="text-title-lg font-headline-md font-bold text-primary dark:text-inverse-primary tracking-tight block">
              Pesantren Modern Al-Hikmah
            </span>
            <span className="text-label-sm font-label-sm text-outline tracking-wider block">DARUL HIKMAH &amp; SAINS TERPADU</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.id} className={linkClass(link.id)} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons Cluster */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-primary text-primary font-label-lg text-label-lg hover:bg-primary-container/10 active:scale-95 transition-all duration-150"
            href="#ppdb"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Unduh Brosur</span>
          </a>
          <a
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary shadow-sm hover:shadow active:scale-95 transition-all duration-150"
            href="#ppdb-form"
          >
            <span className="material-symbols-outlined text-[18px]">edit_square</span>
            <span>Daftar PPDB Online</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          aria-label="Buka Menu Navigasi"
          aria-expanded={drawerOpen}
          className="lg:hidden p-2 text-on-surface hover:text-primary"
          onClick={() => setDrawerOpen((open) => !open)}
        >
          <span className="material-symbols-outlined text-[28px]">{drawerOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="lg:hidden border-t border-outline-variant bg-surface px-6 py-4 flex flex-col gap-3" id="mobile-drawer">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              className={`py-1.5 ${activeSection === link.id ? 'text-primary font-bold' : 'text-on-surface-variant font-medium'}`}
              href={`#${link.id}`}
              onClick={closeDrawer}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-outline-variant flex flex-col gap-2">
            <a className="w-full text-center py-2 border border-primary text-primary rounded-lg font-label-lg" href="#ppdb" onClick={closeDrawer}>
              Unduh Brosur
            </a>
            <a
              className="w-full text-center py-2.5 bg-primary-container text-on-primary rounded-lg font-label-lg"
              href="#ppdb-form"
              onClick={closeDrawer}
            >
              Daftar PPDB Online
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
