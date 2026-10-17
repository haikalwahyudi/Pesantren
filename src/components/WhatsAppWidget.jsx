export default function WhatsAppWidget() {
  return (
    <aside aria-label="Bantuan Langsung WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className="hidden md:flex flex-col items-end bg-surface-container-lowest p-2.5 px-4 rounded-xl shadow-xl border border-outline-variant">
        <span className="text-label-sm font-label-sm text-secondary font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Panitia PPDB Online
        </span>
        <span className="text-body-sm font-body-sm text-primary font-medium">Ada Pertanyaan? Chat Sekarang</span>
      </div>
      <a
        aria-label="Chat WhatsApp Panitia"
        className="w-14 h-14 rounded-full bg-[#128C7E] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform"
        href="https://wa.me/6281288997700?text=Halo%20Panitia%20PPDB%20Pesantren%20Modern%20Al-Hikmah,%20saya%20ingin%20bertanya%20mengenai%20pendaftaran"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[32px]">chat</span>
      </a>
    </aside>
  )
}
