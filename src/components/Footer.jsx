const FOOTER_LINKS = [
  { label: 'Kebijakan Privasi', href: '#' },
  { label: 'Syarat & Ketentuan PPDB', href: '#' },
  { label: 'Alur Pendaftaran', href: '#ppdb', featured: true },
  { label: 'Pusat Bantuan & Kontak', href: '#' },
  { label: 'Wakaf Pembangunan', href: '#' },
]

const SOCIALS = [
  { label: 'Kanal Youtube', icon: 'smart_display' },
  { label: 'Akun Instagram', icon: 'photo_camera' },
  { label: 'Email Resmi', icon: 'mail' },
]

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-inverse-surface border-t border-primary-container dark:border-outline text-on-primary dark:text-inverse-on-surface">
      <div className="w-full px-6 lg:px-12 py-12 max-w-7xl mx-auto flex flex-col gap-8">
        {/* Top Grid Footer with Google Maps Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-primary-container">
          {/* Brand & Description */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">mosque</span>
              </div>
              <span className="text-headline-sm font-headline-md font-bold text-on-primary dark:text-inverse-on-surface tracking-tight">
                Pesantren Modern Al-Hikmah
              </span>
            </div>
            <p className="text-body-md font-body-md text-on-primary-container">
              Lembaga pendidikan Islam modern berbasis tahfidzul Qur&apos;an, penguasaan bahasa internasional, dan keunggulan sains riset.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-secondary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Alamat & Maps Preview */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <h4 className="text-title-lg font-title-lg font-bold text-secondary-fixed">Lokasi &amp; Kontak Kampus</h4>
            <p className="text-body-sm font-body-sm text-on-primary-container">Jl. Raya Pesantren No. 99, Ciawi, Bogor, Jawa Barat 16720 - Indonesia</p>
            <div className="mt-2 rounded-xl overflow-hidden border border-primary-container h-36 bg-surface-container relative">
              <div
                aria-hidden="true"
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCC2goNwo0IHOZdzOabguK7PYKBXlGQotQzpfelzbX2JJ17mOA3G-eHC3Tr0d8uOtkkym0qBDmjD4HIM90G5EvnZ6BsomXQA7Sg8qnifG7sUMK6S7GNkKXxd3gnV0Qs2yVTN2r85sRdF1eIfinY4EwouDA4JSVOPqnwyh8RimWUxgo5H49sJatAV4HJt0GtUSbStqFGPpcGPsqRsVYW1CDDhtQfz1jixzDFTaZBUtGfjRogEAvawKP5OA')",
                }}
              ></div>
              <a
                className="absolute bottom-2 right-2 bg-primary/90 text-on-primary text-label-sm font-label-sm px-2.5 py-1 rounded flex items-center gap-1 hover:bg-secondary"
                data-location="Bogor"
                href="https://maps.google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[14px]">map</span>
                <span>Buka Google Maps</span>
              </a>
            </div>
          </div>

          {/* Tautan Navigasi Footer */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <h4 className="text-title-lg font-title-lg font-bold text-secondary-fixed">Akses Cepat PPDB</h4>
            <ul className="space-y-2 mt-1 text-body-md font-body-md">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className={`hover:text-secondary-fixed dark:hover:text-secondary-fixed-dim hover:underline transition-all duration-150 ${
                      link.featured ? 'text-secondary-fixed font-semibold' : 'text-surface-container-highest dark:text-surface-dim'
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-label-sm font-label-sm text-on-primary-container">
          <p>© 2024 Pesantren Modern Al-Hikmah. Seluruh Hak Cipta Dilindungi.</p>
          <p className="mt-2 sm:mt-0">Sistem Informasi Akademik &amp; PPDB Terintegrasi v4.2</p>
        </div>
      </div>
    </footer>
  )
}
