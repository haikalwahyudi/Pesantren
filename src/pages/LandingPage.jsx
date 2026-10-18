import { useEffect, useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Profil from '../components/Profil.jsx'
import Kurikulum from '../components/Kurikulum.jsx'
import Fasilitas from '../components/Fasilitas.jsx'
import PPDB from '../components/PPDB.jsx'
import Prestasi from '../components/Prestasi.jsx'
import Wakaf from '../components/Wakaf.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppWidget from '../components/WhatsAppWidget.jsx'
import VideoModal from '../components/VideoModal.jsx'

const LANDING_TITLE = 'Pesantren Modern Darul Hikmah & Sains | Sistem Terpadu PPDB Online'

export default function LandingPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  useEffect(() => {
    document.title = LANDING_TITLE
    // Scroll ke section tujuan saat kembali dari halaman lain (mis. #profil)
    const hash = window.location.hash
    if (hash && !hash.startsWith('#/')) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView())
        return
      }
    }
    if (!hash || hash.startsWith('#/')) {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero onOpenVideo={() => setVideoModalOpen(true)} />
        <Profil />
        <Kurikulum />
        <Fasilitas />
        <PPDB />
        <Prestasi />
        <Wakaf />
      </main>
      <Footer />
      <WhatsAppWidget />
      <VideoModal open={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </>
  )
}
