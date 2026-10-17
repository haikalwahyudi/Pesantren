import { useEffect } from 'react'

export default function VideoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      aria-label="Video Profil Pesantren Modern Al-Hikmah"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
    >
      <div className="bg-surface-container-lowest rounded-2xl max-w-3xl w-full p-6 border border-outline-variant shadow-2xl">
        <div className="flex justify-between items-center pb-4 border-b border-outline-variant">
          <h3 className="text-title-lg font-title-lg text-primary font-bold">Video Profil Pesantren Modern Al-Hikmah</h3>
          <button aria-label="Tutup Modal Video" className="text-on-surface hover:text-error" onClick={onClose}>
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>
        </div>
        <div className="py-6 aspect-video bg-inverse-surface rounded-xl flex items-center justify-center text-center p-6 text-inverse-on-surface relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuOXz8cXA7mJh28ocdqfWV3_sPXWKcsH58g3fT6Gf7C1LYYEREyZkDh_eerqsCUsYrFS99wXbqCbC4PLRESHu7DQKe_CHjs_cqz87WzicJ5mLhZJiimKjlvn7Zag5r_abk8GUomeI8jJtSU-EzqnCtZmA3Q4VelVGDm1o4dJ_2DYrHZT_Izy41shRtiOaFUOM3BE6P2oTaMKeczwmLyMzXpq7OKwNwH2MNkg_GZMp-BF2429T5hLZIeQ')",
            }}
          ></div>
          <div className="relative z-10 flex flex-col items-center">
            <span className="material-symbols-outlined text-[64px] text-secondary cursor-pointer hover:scale-110 transition-transform">play_circle</span>
            <p className="text-body-lg font-body-lg font-semibold mt-2">Pratinjau Video Dokumenter Profil &amp; Keseharian Santri (4K)</p>
            <p className="text-body-sm font-body-sm text-outline-variant">Durasi: 07 Menit 34 Detik</p>
          </div>
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <button className="px-5 py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg" onClick={onClose}>
            Tutup Pemutar
          </button>
        </div>
      </div>
    </div>
  )
}
