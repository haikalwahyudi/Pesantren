export default function TopBar() {
  return (
    <aside aria-label="Informasi Penting PPDB" className="bg-primary text-on-primary text-body-sm font-body-sm py-2 px-4 border-b border-primary-container">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary text-on-primary">
            PENGUMUMAN
          </span>
          <span className="font-medium">PPDB TA 2025/2026 Gelombang 1 Dibuka - Kuota Terbatas!</span>
        </div>
        <div className="flex items-center gap-6 text-on-primary-container">
          <a className="flex items-center gap-1.5 hover:text-on-primary transition-colors" href="tel:+6281288997700">
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>Hotline: +62 812-8899-7700</span>
          </a>
          <div className="hidden sm:flex items-center gap-1.5 hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span>Layanan: 08:00 - 16:00 WIB</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
